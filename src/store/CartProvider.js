import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let updatedTotalAmount;

  switch (action.type) {
    case 'CART_ADD_ITEM':
      const addItem = action.item;
      updatedTotalAmount = state.totalAmount + addItem.price * addItem.amount;

      // if item is in cart, increment its amount, else add the item
      const itemIsInCart = state.items.some((item) => item.id === addItem.id);
      updatedItems = itemIsInCart
        ? state.items.map((item) =>
            item.id === addItem.id
              ? { ...item, amount: item.amount + addItem.amount }
              : item
          )
        : state.items.concat(addItem);

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'CART_REMOVE_ITEM':
      const removeItem = state.items.find((item) => item.id === action.id);

      // if current amount is 1, remove the item, else decrement the amount
      updatedItems =
        removeItem.amount === 1
          ? state.items.filter((item) => item.id !== removeItem.id)
          : state.items.map((item) =>
              item.id === removeItem.id
                ? { ...item, amount: item.amount - 1 }
                : item
            );

      updatedTotalAmount = state.totalAmount - removeItem.price;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'CART_ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'CART_REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

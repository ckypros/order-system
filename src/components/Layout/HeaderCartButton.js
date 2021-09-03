import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const numItems = cartContext.items.reduce((count, item) => {
    return count + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default HeaderCartButton;

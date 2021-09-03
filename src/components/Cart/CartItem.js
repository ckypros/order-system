import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
  //console.log(item.price.toFixed(2));
  const itemPrice = '$' + item.price.toFixed(2);
  const totalItemPrice = '$' + Number(item.price * item.amount).toFixed(2);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
          <span className={classes.amount}>x {item.amount}</span>
          <span className={classes.total}>{totalItemPrice}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};
export default CartItem;

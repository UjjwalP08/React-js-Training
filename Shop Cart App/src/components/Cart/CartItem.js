import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  const { title, quantity, total, price, id } = props.item;

  const addItem = ()=>{
    dispatch(cartAction.addToCart({
      id,title,price
    }));
  }
  const removeItem = ()=>{
    dispatch(cartAction.removeToCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Rs.{total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(Rs.{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

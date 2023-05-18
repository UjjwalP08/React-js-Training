import { cartAction } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import cartSlcie from '../../store/cart-slice';
import { useDispatch } from 'react-redux';


const ProductItem = (props) => {
  const { title, price, id, description } = props;
  const dispatch = useDispatch();

  const addCartHandler = ()=>{
    dispatch(cartAction.addToCart({
      id:id,
      price:price,
      title:title
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>Rs.{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

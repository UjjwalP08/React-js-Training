import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQunatity = useSelector(state => state.cartReducer.totalQunatity)
  const cartHandler = ()=>{
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQunatity}</span>
    </button>
  );
};

export default CartButton;

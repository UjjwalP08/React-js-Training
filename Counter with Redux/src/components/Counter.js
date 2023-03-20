import { useSelector,useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = ()=>{
    dispatch({type:"increment"})
  }
  const decrementHandler = ()=>{
    dispatch({type:"decrement"})
  }
  const toggleCounterHandler = () => {};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

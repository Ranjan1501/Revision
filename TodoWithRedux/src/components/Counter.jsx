import { useDispatch, useSelector } from "react-redux";
import { addCounter, decCounter } from "../Counter/Action";
export const Counter = () => {
  const ans = useSelector((state) => state.counterState.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {ans}</h1>
      <button onClick={() => dispatch(addCounter(1))}>ADD</button>
      <button onClick={() => dispatch(decCounter(2))}> Sub</button>
    </div>
  );
};

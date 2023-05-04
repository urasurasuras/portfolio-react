import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const dispatch = useDispatch();
  const persistentCount = useSelector(
    (state) => state.persistentCounter.persistentCount
  );
  //   const nonPersistentCounter = useSelector(
  //     (state) => state.nonPersistentCounter
  //   );
  console.log(persistentCount);

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div>
      <h1>Persistent Redux Counter</h1>
      <div>{persistentCount}</div>

      <Button onClick={decrementHandler}>-</Button>
      <Button onClick={incrementHandler}>+</Button>
    </div>
  );
}

export default Counter;

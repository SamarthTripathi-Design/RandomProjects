import { useDispatch } from "react-redux";
import { incCounter, decCounter } from "./Action.jsx";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(incCounter())}>INC</button>
      <button onClick={() => dispatch(decCounter())}>DEC</button>
    </>
  );
};

export default Counter;

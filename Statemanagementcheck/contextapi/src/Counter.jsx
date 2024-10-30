// Counter.js
import { useCounter } from "./CounterContext.jsx";

const Counter = () => {
  const { incCounter, decCounter } = useCounter();

  return (
    <>
      <button onClick={incCounter}>INC</button>
      <button onClick={decCounter}>DEC</button>
    </>
  );
};

export default Counter;

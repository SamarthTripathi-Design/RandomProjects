import { useCounter } from "./CounterContext";
import Counter from "./Counter";

const App = () => {
  const { counter } = useCounter();

  return (
    <div>
      <p>Counter: {counter}</p>
      <Counter />
    </div>
  );
};

export default App;

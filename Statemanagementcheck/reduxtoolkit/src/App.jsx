import { useSelector } from "react-redux";
import Counter from "./Counter.jsx";

const App = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>Counter: {counter}</p>
      <Counter />
    </div>
  );
};

export default App;

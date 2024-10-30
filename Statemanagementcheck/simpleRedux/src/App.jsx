import { useSelector } from "react-redux";
import Counter from "./Counter";

export default function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>Counter: {counter}</p>
      <Counter />
    </div>
  );
}

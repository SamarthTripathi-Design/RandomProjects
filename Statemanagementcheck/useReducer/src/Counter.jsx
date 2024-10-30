// Counter.js
import React, { useReducer } from "react";

// Initial state
const initialState = { counter: 0 };

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Counter: {state.counter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
    </div>
  );
};

export default Counter;

// Counter.js
import React from "react";
import { useDispatch } from "react-redux";
import { incCounter, decCounter } from "./counterSlice";

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

import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => setCounter((prev) => prev + 1);
  const decCounter = () => setCounter((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ counter, incCounter, decCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

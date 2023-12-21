import { useState } from "react";

const useCounter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count: count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
};
export default useCounter;

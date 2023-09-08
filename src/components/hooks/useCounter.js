import { useState } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;

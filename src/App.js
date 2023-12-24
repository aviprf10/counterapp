import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increase the count by the number of times the button is clicked
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    // Always decrease the count by one
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;

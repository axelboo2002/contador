import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1 className="counter__title">Contador: {count}</h1>
      <div className="counter__buttons">
        <button className="counter__button" onClick={decrement}>-</button>
        <button className="counter__button" onClick={reset}>Reset</button>
        <button className="counter__button" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;

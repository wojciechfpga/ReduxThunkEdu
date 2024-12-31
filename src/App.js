// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementNumber, decrementNumber } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.number.value);

  const handleIncrement = (amount) => {
    dispatch(incrementNumber(amount));
  };

  const handleDecrement = (amount) => {
    dispatch(decrementNumber(amount));
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Value: {value}</h1>
      <div style={{ margin: '20px' }}>
        <button onClick={() => handleIncrement(1)}>Increment by 1</button>
        <button onClick={() => handleIncrement(2)}>Increment by 2 (Ignored)</button>
        <button onClick={() => handleIncrement(3)}>Increment by 3</button>
      </div>
      <div style={{ margin: '20px' }}>
        <button onClick={() => handleDecrement(1)}>Decrement by 1</button>
        <button onClick={() => handleDecrement(2)}>Decrement by 2</button>
        <button onClick={() => handleDecrement(3)}>Decrement by 3</button>
      </div>
    </div>
  );
};

export default App;

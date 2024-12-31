// src/actions.js

// Inkrementacja z warunkiem (ignorowanie wartości 2)
export const incrementNumber = (amount) => {
    return (dispatch) => {
      if (amount === 2) {
        console.log('Value 2 is ignored for increment.');
        return;
      }
      dispatch({
        type: 'INCREMENT',
        payload: amount,
      });
    };
  };
  
  // Dekrementacja (bez ignorowania wartości)
  export const decrementNumber = (amount) => {
    return (dispatch) => {
      dispatch({
        type: 'DECREMENT',
        payload: amount,
      });
    };
  };
  
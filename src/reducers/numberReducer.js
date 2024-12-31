// src/reducers/numberReducer.js
const initialState = {
    value: 0,
  };
  
  const numberReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          value: state.value + action.payload,
        };
      case 'DECREMENT':
        return {
          ...state,
          value: state.value - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default numberReducer;
  
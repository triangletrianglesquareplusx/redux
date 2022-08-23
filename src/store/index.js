import { createStore } from "redux";

const initialState = {
  valid: false,
  names: ["Terry", "Mike"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, valid: !state.valid };
    case "DEC":
      return { counter: state.counter - 1 };
    case "ADD":
      return { ...state, names: state.names.concat(action.payload) };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

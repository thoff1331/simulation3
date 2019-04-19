import { createStore } from "redux";

const initialstate = {
  homes: []
};

export const ADD_HOME = "ADD_HOME";

function reducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_HOME:
      return { ...state, homes: [...state.homes, action.payload] };
    default:
      return state;
  }
}

export default createStore(reducer);

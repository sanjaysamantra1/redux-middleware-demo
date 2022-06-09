import { combineReducers } from "redux";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const mainReducer = combineReducers({
  productReducer,
});

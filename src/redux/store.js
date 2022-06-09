import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducers/productReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default myStore;

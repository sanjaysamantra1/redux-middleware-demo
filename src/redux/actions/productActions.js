import fakeStoreAPI from "../../apis/fakeStoreAPI";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await fakeStoreAPI.get("/products");
    dispatch(setProducts(response.data));
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

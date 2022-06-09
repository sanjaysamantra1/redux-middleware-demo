import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Product from "./Product";

export default function ProductListing() {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchProducts());
  };

  return (
    <>
      <div>ProductListing</div>
      <button onClick={fetchData}>fetch Products</button>
      <Product></Product>
    </>
  );
}

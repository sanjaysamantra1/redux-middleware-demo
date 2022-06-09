import React from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const products = useSelector((state) => state.productReducer.products);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-3" key={product.id}>
              <div className="card" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card cap"
                  height="200px"
                />
                <div className="card-body" height="150px">
                  <h5 className="card-title">Category: {product.category}</h5>
                  <p className="card-text">price: {product.price}</p>
                  <p className="card-text">Rating: {product.rating.rate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

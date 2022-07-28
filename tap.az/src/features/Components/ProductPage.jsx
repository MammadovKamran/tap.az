import React from "react";
import { Link, useParams } from "react-router-dom";
import { selectProductById } from "../Redux/products/productSlice";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { productID } = useParams();
  const productId = useSelector((state) => selectProductById(state, productID));
  console.log(productId);
  if (productId) {
    return (
      
      <div key={productId.id} className="d-flex flex-column single-product">
      <div>
        <img src={productId.img} alt="" />
      </div>
      <div className="d-flex justify-content-center mx-4 flex-column">
        <p className="product-price">{productId.price}</p>
        <p className="product-name">{productId.name}</p>
        <p className="product-city">
          {productId.city}, {productId.addedTime}
        </p>
      </div>
    </div>
    );
  }

  return (
    <div>
      <h1>Post not found</h1>
    </div>
  );
};

export default ProductPage;

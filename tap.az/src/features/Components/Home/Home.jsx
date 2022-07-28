import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../Redux/products/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const allproducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  console.log(allproducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <h6 style={{ color: "#ab94ad" }} className="mx-4">
        VIP ELANLAR
      </h6>

      <div className="d-flex justify-content-center">
        <div className="products-grid">
          {allproducts.map((product) => {
            if (product.vip === "true") {
              return (
                <Link to={`/product/${product.id}`}>
                  <div key={product.id} className="d-flex flex-column product-box">
                    <div>
                      <img src={product.img} alt="" />
                    </div>
                    <div className="d-flex justify-content-center mx-4 flex-column">
                      <p className="product-price">{product.price}</p>
                      <p className="product-name">{product.name}</p>
                      <p className="product-city">
                        {product.city}, {product.addedTime}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <h6 style={{ color: "#ab94ad" }} className="mx-4">
        ELANLAR
      </h6>
      <div className="d-flex justify-content-center">
        <div className="products-grid">
          {allproducts.map((product) => {
            return (
              <Link to={`/posts/${product.id}`}>
                <div key={product.id} className="d-flex flex-column product-box">
                  <div>
                    <img src={product.img} alt="" />
                  </div>
                  <div className="d-flex justify-content-center mx-4 flex-column">
                    <p className="product-price">{product.price}</p>
                    <p className="product-name">{product.name}</p>
                    <p className="product-city">
                      {product.city}, {product.addedTime}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

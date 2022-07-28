import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import Home from "../Components/Home/Home";
import SignIn from "../Components/Login/SignIn";
import SignUp from "../Components/Login/SignUp";
import ProductPage from "../Components/ProductPage";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

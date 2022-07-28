import React from "react";
import { Container } from "reactstrap";
import Footer from "../Components/Header-Footer/Footer";
import Navigation from "../Components/Header-Footer/Navigation";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div >
      
        {pathname !== "/signIn" && "/signUp" ? <Navigation /> : <div />}
        <Dashboard />
        {pathname !== "/signIn" && "/signIn" ? <Footer /> : <div />}
     
    </div>
  );
};

export default App;

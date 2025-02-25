import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const hideItems =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {hideItems || <NavBar></NavBar>}
      <Outlet></Outlet>
      {hideItems || <Footer></Footer>}
    </div>
  );
};

export default Main;

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : 'menu',
          element : <Menu></Menu>
        },
        {
          path : 'order/:category',
          element : <Order></Order>
        },
        {
          path : 'contact',
          element : <ContactUs></ContactUs>
        },
        {
          path : 'login',
          element : <Login></Login>
        },{
          path : 'signup',
          element : <SignUp></SignUp>
        }
      ]
    },
  ]);
  
import React from "react";
import icon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <div className="flex gap-4 font-medium pt-3">
      <li>
        <Link to='/' className="hover:text-yellow-400">
          Home
        </Link>
      </li>
      <li>
        <Link to='contact' className="hover:text-yellow-400">
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to='menu' className="hover:text-yellow-400">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to='/order/salad' className="hover:text-yellow-400">
          Order Food
        </Link>
      </li>
      <li className="size-10">
        <img src={icon} alt="Cart" />
      </li>
      <li>
        <Link to='/login' className="hover:text-yellow-400">
          Login
        </Link>
      </li>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-10 text-white flex justify-between items-center px-8 h-16">
      {/* Logo Section */}
      <div className="text-3xl font-mono font-medium text-yellow-400">North Burg</div>

      {/* Hamburger icon and dropdown for small screens */}
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 bg-black bg-opacity-90 rounded-box w-52 p-2 shadow-lg z-10 text-white"
          >
            {navOptions}
          </ul>
        </div>
      </div>

      {/* Center Navigation Items (for large screens) */}
      <div className="hidden lg:text-center lg:flex space-x-6">
        <ul className="flex space-x-6">{navOptions}</ul>
      </div>
    </nav>
  );
};

export default NavBar;

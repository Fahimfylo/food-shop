import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <div className="flex gap-4 font-medium items-center">
      <li>
        <Link to="/" className="hover:text-green-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="contact" className="hover:text-green-500">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="menu" className="hover:text-green-500">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/order/salad" className="hover:text-green-500">
          Order Food
        </Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Admin-D</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">User-D</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn bg-transparent/20 border-none hover:bg-orange-500">
            <FaShoppingCart className="mr-2 text-white" size={20} />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <div className="flex flex-row items-center gap-2">
          <span className="text-blue-400 text-lg">{user?.displayName}</span>
          <li
            onClick={handleLogOut}
            className="btn bg-transparent border-none text-white hover:bg-red-500 text-[16px] flex"
          >
            LOGOUT
          </li>
        </div>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="btn bg-transparent text-[16px] text-white hover:bg-green-500 border-none"
            >
              LOGIN
            </Link>
          </li>
        </>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-10 text-white flex justify-between items-center px-8 h-16">
      {/* Logo Section */}
      <div className="text-3xl font-mono font-medium text-yellow-400">
        North Burg
      </div>

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

import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaShoppingBag,
  FaEnvelope,
  FaHamburger,
  FaAddressBook,
  FaUsers,
} from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO : get isAdmin value from the Database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-72 min-h-screen bg-orange-400 text-green-950">
        <div>
          <h1 className="pt-14 pl-10 font-mono text-3xl font-extrabold">
            NORTH BURG
          </h1>
          <p className="pl-10 font-serif text-xl">RESTAURANT</p>
        </div>
        <ul className="menu mt-10 ml-4 text-lg font-normal font-mono">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="hover:text-white gap-4"
                >
                  <FaHome size={25} />
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="hover:text-white gap-4"
                >
                  <GiForkKnifeSpoon size={25} />
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="hover:text-white gap-4"
                >
                  <FaList size={25} />
                  MANAGE ITEMS
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="hover:text-white gap-4"
                >
                  <FaAddressBook size={25} />
                  MANAGE BOOKINGS
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="hover:text-white gap-4"
                >
                  <FaUsers size={25} />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className="hover:text-white gap-4"
                >
                  <FaHome size={25} />
                  USER HOME
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="hover:text-white gap-4"
                >
                  <FaCalendar size={25} />
                  RESERVATION
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="hover:text-white gap-4"
                >
                  <MdOutlinePayment size={25} />
                  PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="hover:text-white gap-4"
                >
                  <FaShoppingCart size={25} />
                  MY CART ({cart.length})
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/dashboard/review"
                  className="hover:text-white gap-4"
                >
                  <FaRankingStar size={25} />
                  ADD REVIEW
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="hover:text-white gap-4"
                >
                  <FaList size={25} />
                  MY BOOKINGS
                </NavLink>
              </li> */}
            </>
          )}

          {/* Shared NavLinks */}
          <div className="divider mr-5 text-white"></div>
          <li>
            <NavLink to="/" className="hover:text-white gap-4">
              <FaHome size={25} />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="hover:text-white gap-4">
              <FaHamburger size={25} />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/shop" className="hover:text-white gap-4">
              <FaShoppingBag size={25} />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-white gap-4">
              <FaEnvelope size={24} />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard */}
      <div className="flex-1 bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;

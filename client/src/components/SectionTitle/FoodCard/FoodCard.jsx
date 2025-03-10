import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to DB
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart item count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In!",
        text: "Please Login to Add to Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card text-center rounded-none bg-base-100 lg:w-72 shadow-2xl">
        <figure>
          <img src={image} alt="foods" />
        </figure>
        <p className="bg-slate-900 right-0 mr-4 mt-4 px-3 py-2 text-white absolute">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <button
            onClick={handleAddToCart}
            className="btn text-gray-500  hover:bg-orange-400 bg-slate-100 w-32 mx-auto border-0 border-orange-400 btn-outline border-b-2 mt-10 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

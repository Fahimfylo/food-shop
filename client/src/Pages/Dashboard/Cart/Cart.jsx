import useCart from "../../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="my bookings" subHeading="Excellent Ambience"></SectionTitle>

      <div className="lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto bg-white mb-10">
        <div className="flex justify-between items-center p-5 mb-5 font-semibold">
          <p className="text-left lg:text-xl md:text-lg font-serif">
            TOTAL ORDERS : {cart.length}
          </p>
          <p className="flex-1 text-center lg:text-xl md:text-lg font-serif">
            TOTAL PRICE : $ {totalPrice}
          </p>
          <button className="bg-orange-400 btn hover:bg-orange-500 text-white lg:text-lg md:text-base rounded md:p-3 font-serif">
            PAY
          </button>
        </div>

        <div className="overflow-x-auto mx-5">
          <table className="table rounded-xl overflow-hidden">
            {/* head */}
            <thead className="rounded-t-xl">
              <tr className="bg-orange-400 text-white h-14 lg:text-[16px]">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="font-serif text-gray-500 lg:text-[16px]"
                >
                  <th className="text-black">{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="h-14 w-14">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="font-sans font-semibold">
                    $ {item.price.toFixed(2)}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-white border-none p-2 hover:bg-red-200 rounded-md shadow text-red-500"
                    >
                      <MdDeleteForever size={22} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

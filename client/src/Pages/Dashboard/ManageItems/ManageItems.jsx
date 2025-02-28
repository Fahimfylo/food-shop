import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu(); // Fix: Skipping loading state
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch(); // Refresh menu after delete
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="Hurry up" />

      <div className="font-serif lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto bg-white mb-10">
        <div className="flex justify-between items-center p-5 mb-5 font-semibold">
          <p className="text-left lg:text-xl md:text-lg font-serif">
            TOTAL ITEMS : {menu.length}
          </p>
        </div>
        <div className="overflow-x-auto mx-5">
          <table className="table rounded-xl overflow-hidden">
            <thead className="rounded-t-xl">
              <tr className="bg-orange-400 text-white h-14 lg:text-[16px]">
                <th></th>
                <th>IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td className="font-bold text-base">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="h-14 w-14">
                          <img src={item.image} alt="Item image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-500 text-base">{item.name}</td>
                  <td className="text-gray-500 font-sans font-semibold">
                    ${item.price}
                  </td>
                  {/* Update Items */}
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button
                        onClick={() => console.log("Update feature pending")}
                        className="bg-white border-none p-2 hover:bg-red-200 rounded-md shadow text-red-500"
                      >
                        <FaRegEdit size={22} />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="bg-white border-none p-2 hover:bg-red-200 rounded-md shadow text-red-500"
                    >
                      <MdDeleteForever size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: `${user.name} is an Admin Now!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
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
      <SectionTitle
        heading="MANAGE ALL USERS"
        subHeading="---How many?---"
      ></SectionTitle>
      <div className="lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto bg-white mb-10">
        <div className="flex justify-between items-center p-5 mb-5 font-semibold">
          <p className="text-left lg:text-xl md:text-lg font-serif">
            TOTAL USERS : {users.length}
          </p>
        </div>
        <div className="overflow-x-auto mx-5">
          <table className="table rounded-xl overflow-hidden">
            {/* head */}
            <thead className="rounded-t-xl">
              <tr className="bg-orange-400 text-white h-14 lg:text-[16px]">
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="font-serif text-gray-500 lg:text-[16px]"
                >
                  <th className="text-black">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-white border-none p-2 hover:bg-red-200 rounded-md shadow text-red-500"
                      >
                        <FaUsers size={22} />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
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

export default AllUsers;

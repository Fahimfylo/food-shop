import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        heading="payment history"
        subHeading="At a Glance!"
      ></SectionTitle>
      <div className="lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto bg-white mb-10">
        <div className="p-5">
          <p className="text-left pt-2 font-semibold lg:text-xl md:text-lg font-serif">
            TOTAL PAYMENTS : {payments.length}
          </p>
        </div>
        <div className="overflow-x-auto mx-5">
          <table className="table rounded-xl overflow-hidden">
            {/* head */}
            <thead className="rounded-t-xl">
              <tr className="bg-orange-400 text-white h-14 lg:text-[16px]">
                <th></th>
                <th>EMAIL</th>
                <th>TRANSACTION ID</th>
                <th>TOTAL PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id} className="font-serif text-gray-500 lg:text-[16px]">
                  <td className="font-serif font-semibold text-black">{index + 1}</td>
                  <td className="font-serif ">{payment.email}</td>
                  <td className="font-serif ">{payment.transactionId}</td>
                  <td className="font-sans font-semibold">$ {payment.price}</td>
                  <td className="font-serif">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

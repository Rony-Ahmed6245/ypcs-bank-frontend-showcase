import { useLoaderData } from "react-router-dom";
import PayHistryTable from "./PayHistryTable";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PaymentHistry = () => {
  const [amounts, setAmounts] = useState([]);
  const data = useLoaderData([]);
 
  useEffect(() => {
    setAmounts(data);
  },[])

  const handleDelete = async (accountId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Deposit history delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete History!",
      });

      if (result.isConfirmed) {
        const response = await fetch(`https://bank-server-theta.vercel.app/v1/userAmounts/${accountId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setAmounts((prevAmounts) => prevAmounts.filter((item) => item._id !== accountId));
          Swal.fire({
            title: "Deleted!",
            text: "Deposit history has been deleted.",
            icon: "success",
          });
        } else {
          throw new Error(`Error deleting account with ID: ${accountId}`);
        }
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the account.",
        icon: "error",
      });
    }
  };

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto my-5">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]">
            <th className="text-white text-center shadow border uppercase">serial NO</th>
            <th className="text-white text-center shadow border uppercase">Account Number</th>
            <th className="text-white text-center shadow border uppercase">Main Amount</th>
            <th className="text-white text-center shadow border uppercase">Penalty Amount</th>
            <th className="text-white text-center shadow border uppercase px-10">Month</th>
            <th className="text-white text-center shadow border uppercase px-8">Deposit Date</th>
            <th className="text-white text-center shadow border uppercase">delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {amounts?.map((item, index) => (
            <PayHistryTable key={item._id} item={item} index={index + 1} handleDelete={() => handleDelete(item._id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistry;

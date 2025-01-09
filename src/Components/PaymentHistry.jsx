import { useLoaderData } from "react-router-dom";
import PayHistryTable from "./PayHistryTable";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PaymentHistry = () => {
  const [amounts, setAmounts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const data = useLoaderData([]);

  useEffect(() => {
    setAmounts(data);
  }, [data]);

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
        const response = await fetch(
          `https://bank-server-theta.vercel.app/v1/userAmounts/${accountId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setAmounts((prevAmounts) =>
            prevAmounts.filter((item) => item._id !== accountId)
          );
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
      console.error("Error deleting account:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the account.",
        icon: "error",
      });
    }
  };

  // Filter data based on exact match (only the account number should match)
  const filteredAmounts = searchQuery
    ? amounts.filter((item) => item.acc_no === searchQuery) // Exact match filter
    : amounts;

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto my-5">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Exact Account Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full text-black"
        />
      </div>

      {/* Table */}
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-[#4E70EC]">
            <th className="text-white text-center shadow border uppercase">
              নং
            </th>
            <th className="text-white text-center shadow border uppercase">
              একাউন্ট/ফোন নম্বর
            </th>
            <th className="text-white text-center shadow border uppercase">
              জমাকৃত টাকা
            </th>
            <th className="text-white text-center shadow border uppercase">
              জরিমানা
            </th>
            <th className="text-white text-center shadow border uppercase px-10">
          মাস
            </th>
            <th className="text-white text-center shadow border uppercase px-8">
              জমার তারিখ
            </th>
            <th className="text-white text-center shadow border uppercase">
             ডিলিট
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Display filtered data */}
          {filteredAmounts.length > 0 ? (
            filteredAmounts.map((item, index) => (
              <PayHistryTable
                key={item._id}
                item={item}
                index={index + 1}
                handleDelete={() => handleDelete(item._id)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-black p-4">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistry;

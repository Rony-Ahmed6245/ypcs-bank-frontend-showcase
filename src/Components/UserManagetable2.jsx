import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserManagetable2 = ({ item, index, handleDelete, handleToggleVisibility }) => {
    const [accNoCopySuccess, setAccNoCopySuccess] = useState(false);

    const handleCopyClick = () => {
        // Create a temporary input element
        const tempInput = document.createElement("input");

        // Set its value to the acc_no
        tempInput.value = item.acc_no;

        // Append it to the body
        document.body.appendChild(tempInput);

        // Select the input's content
        tempInput.select();

        // Execute the copy command
        document.execCommand("copy");

        // Remove the temporary input
        document.body.removeChild(tempInput);

        // Set the copy success state
        setAccNoCopySuccess(true);

        // Reset the copy success state after a short delay
        setTimeout(() => {
            setAccNoCopySuccess(false);
        }, 2000);
    };

    return (
        <div className="relative p-4   border-[#FA1C1E] border flex items-center justify-between ">
        {/* Left Section - Image & Info */}
        <div className="flex items-center gap-6 ">
            <Link to={`/user/${item.acc_no}`}>
                <img
                    className="w-10 h-10 rounded-full border border-[#FA1C1E] object-cover"
                    src={item.img}
                    alt={item.user_name}
                />
            </Link>

            <div>
                <h2 className="text-[12px] font-bold text-gray-800">{item.user_name}</h2>
                <p className="text-black text-[10px] font-medium mt-1">
                    একাউন্ট নম্বর:
                    <span
                        onClick={() => handleCopyClick(item._id)}
                        className={`ml-3  ${
                            accNoCopySuccess ? "bg-green-500 text-white" : "text-green-700"
                        }`}
                    >
                        {item.acc_no}
                    </span>
                </p>
            </div>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex gap-3 items-center">
            <Link
                to={`/user/${item.acc_no}`}
                className="bg-[#FA1C1E] text-white px-4 py-1 rounded  text-[13px] transition-all duration-200 shadow"
            >
                Amount
            </Link>
         
        </div>
    </div>
    );
};

export default UserManagetable2;

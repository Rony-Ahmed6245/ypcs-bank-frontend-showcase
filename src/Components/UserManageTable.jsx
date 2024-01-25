import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const UserManageTable = ({ item, index, handleDelete }) => {
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
        <tr className="shadow text-gray-200 ">
            <td className="shadow border text-center">{index}</td>
            <td className="shadow border  ">
                <Link to={`/user/${item.acc_no}`} className="flex justify-center items-center">
                    <img className="w-[40px] h-[40px] rounded-md  " src={item.img} alt="" />
                </Link>
            </td>

            <td className="shadow border  text-center">{item.user_name}</td>
            <td
                className={`shadow border  text-center ${accNoCopySuccess ? "bg-green-500 text-white" : ""}`}
                onClick={() => handleCopyClick(item._id)}
                style={{ cursor: "pointer" }}
            >
                {item.acc_no}
            </td>
            <td className="shadow border text-xl text-[#ED0B5A] " onClick={() => handleDelete(item._id)}>
                <div className=" flex justify-center "><RiDeleteBin6Line /></div>
            </td>

        </tr>
    );
};

export default UserManageTable;
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserManageTable = ({ item, index, handleDelete, handleToggleVisibility }) => {
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

        <>
            {/* <tr className="shadow text-black ">
                <td className="shadow border text-center">{index}</td>
                <td className="shadow border ">
                    <Link to={`/user/${item.acc_no}`} className="flex justify-center items-center">
                        <img className="w-[40px] h-[40px] rounded-md " src={item.img} alt="" />
                    </Link>
                </td>

                <td className="shadow border text-center">{item.user_name}</td>
                <td
                    className={`shadow border text-center ${accNoCopySuccess ? "bg-green-500 text-white" : ""}`}
                    onClick={() => handleCopyClick(item._id)}
                    style={{ cursor: "pointer" }}
                >
                    {item.acc_no}
                </td>
                <td className="shadow border text-xl text-[#ED0B5A] " onClick={() => handleDelete(item._id)}>
                    <div className=" flex justify-center "><RiDeleteBin6Line /></div>
                </td>

            </tr> */}

            {/* ----------------------- */}
            <div>
                <div className="p relative " key={item.id}>
                    <div className="flex justify-between items-center">
                        <div className="">

                            <Link to={`/user/${item.acc_no}`} className="flex justify-center items-center">
                                <img className="w-20  max-h-20 rounded-md " src={item.img} alt="" />
                            </Link>
                            {/* <img
                                className="w-16 max-h-16   rounded"
                                src={item.img}
                                alt="User Avatar"
                            /> */}
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-800">{item.user_name}</h2>
                            <p className=" text-gray-500 text-md">একাউন্ট নম্বর:

                                <span
                                    className={`text-2xl rounded-full p-4  ${accNoCopySuccess ? "bg-green-500 text-white" : " "}`}
                                    onClick={() => handleCopyClick(item._id)}
                                    style={{ cursor: "pointer" }}

                                >
                                    {item.acc_no}
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* ----------  */}
                    <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-center flex justify-center items-center -top-6 -right-4 w-5 text-white h-5 rounded-full absolute"><RiDeleteBin6Line /></button>
                </div>
            </div>

        </>
    );
};

export default UserManageTable;

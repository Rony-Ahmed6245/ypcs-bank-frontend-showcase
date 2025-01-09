
import { RiDeleteBin6Line } from "react-icons/ri";


const PayHistryTable = ({ index, item, handleDelete }) => {


    return (
        <tr className=" shadow text-black border">
            
            <td className="shadow text-black border text-center">{index}</td>
            <td className="shadow text-black border text-center ">{item.acc_no}</td>
            <td className="shadow text-black border text-center">{item.amount}.00 TK</td>
            <td
                className="shadow text-black border text-center"
                style={{ cursor: "pointer" }}
            >
                {item.pen_amount}.00 TK
            </td>
            <td className="shadow text-black border text-center">{item.exdate}</td>
            <td className="shadow text-black border text-center">{item.date}</td>

            <td
                className="border hover:bg-red-200   text-[#ED0B5A]"
                onClick={() => handleDelete(item._id)}
            >
                <div className="flex justify-center"> <RiDeleteBin6Line /></div>
            </td>

        </tr>
    );
};

export default PayHistryTable;
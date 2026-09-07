import { RiDeleteBin6Line } from "react-icons/ri";

const PayHistryTable = ({ index, item, handleDelete }) => {
    return (
        <tr className="hover:bg-indigo-50/50 transition-colors duration-150 border-b border-slate-100 text-xs sm:text-sm text-slate-700">
            {/* Index Number */}
            <td className="py-3.5 px-3 text-center font-medium text-slate-400">
                {index}
            </td>

            {/* Account Number */}
            <td className="py-3.5 px-3 text-center">
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 font-bold text-slate-700 text-xs">
                    {String(item?.acc_no).padStart(2, "0")}
                </span>
            </td>

            {/* Deposited Amount */}
            <td className="py-3.5 px-3 text-right font-bold text-emerald-600">
                {Number(item?.amount || 0).toFixed(2)} Tk
            </td>

            {/* Fine/Penalty Amount */}
            <td className="py-3.5 px-3 text-right font-bold text-amber-600">
                {Number(item?.pen_amount || 0).toFixed(2)} Tk
            </td>

            {/* Payment Month */}
            <td className="py-3.5 px-3 text-center font-semibold text-indigo-900 text-xs">
                {item?.exdate}
            </td>

            {/* Transaction Date */}
            <td className="py-3.5 px-3 text-center text-xs text-slate-500">
                {item?.date}
            </td>

            {/* Action Delete Button */}
            <td className="py-3.5 px-3 text-center">
                <button
                    type="button"
                    onClick={() => handleDelete(item?._id)}
                    className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-all duration-200 focus:outline-none"
                    title="ডিলিট করুন"
                >
                    <RiDeleteBin6Line className="text-base" />
                </button>
            </td>
        </tr>
    );
};

export default PayHistryTable;
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HiCheck, HiClipboardDocument, HiUser, HiArrowTopRightOnSquare } from "react-icons/hi2";

const UserManageTable = ({ item, index, handleDelete }) => {
    const [accNoCopySuccess, setAccNoCopySuccess] = useState(false);

    const handleCopyClick = () => {
        if (!item?.acc_no) return;
        
        const textToCopy = String(item.acc_no);

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyFeedback();
            }).catch(() => {
                fallbackCopy(textToCopy);
            });
        } else {
            fallbackCopy(textToCopy);
        }
    };

    const fallbackCopy = (text) => {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showCopyFeedback();
    };

    const showCopyFeedback = () => {
        setAccNoCopySuccess(true);
        setTimeout(() => {
            setAccNoCopySuccess(false);
        }, 2000);
    };

    return (
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left Section - Image & User Details */}
            <div className="flex items-center gap-4">
                <Link to={`/user/${item?.acc_no}`} className="relative group flex-shrink-0">
                    {item?.img ? (
                        <img
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-indigo-100 object-cover group-hover:border-indigo-500 transition-colors shadow-sm"
                            src={item.img}
                            alt={item?.user_name || "User Avatar"}
                        />
                    ) : (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400">
                            <HiUser className="text-2xl" />
                        </div>
                    )}
                </Link>

                <div className="space-y-1">
                    <h2 className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wide">
                        {item?.user_name || "অজ্ঞাত নাম"}
                    </h2>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>একাউন্ট:</span>
                        <button
                            type="button"
                            onClick={handleCopyClick}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 border ${
                                accNoCopySuccess
                                    ? "bg-emerald-500 border-emerald-500 text-white"
                                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                            }`}
                            title="কপি করতে ক্লিক করুন"
                        >
                            <span>#{String(item?.acc_no || "").padStart(2, "0")}</span>
                            {accNoCopySuccess ? (
                                <HiCheck className="text-sm" />
                            ) : (
                                <HiClipboardDocument className="text-slate-400 text-xs" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section - Action Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <Link
                    to={`/user/${item?.acc_no}`}
                    className="inline-flex items-center gap-1.5 bg-indigo-900 hover:bg-indigo-950 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm"
                >
                    <span>ফান্ড বিবরণী</span>
                    <HiArrowTopRightOnSquare className="text-sm" />
                </Link>

                <button
                    type="button"
                    onClick={() => handleDelete(item?._id)}
                    className="p-2 rounded-xl text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-100 transition-all duration-200 focus:outline-none"
                    title="একাউন্ট ডিলিট করুন"
                >
                    <RiDeleteBin6Line className="text-base" />
                </button>
            </div>
        </div>
    );
};

export default UserManageTable;
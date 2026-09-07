import { useState } from "react";
import { Link } from "react-router-dom";
import { HiCheck, HiClipboardDocument, HiUser, HiArrowTopRightOnSquare } from "react-icons/hi2";

const UserManagetable2 = ({ item, index }) => {
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
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3">
            {/* Left Section - Avatar & User Info */}
            <div className="flex items-center gap-3.5 min-w-0">
                <Link to={`/user/${item?.acc_no}`} className="relative group flex-shrink-0">
                    {item?.img ? (
                        <img
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-indigo-100 object-cover group-hover:border-indigo-500 transition-colors shadow-sm"
                            src={item.img}
                            alt={item?.user_name || "User Avatar"}
                        />
                    ) : (
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400">
                            <HiUser className="text-xl" />
                        </div>
                    )}
                </Link>

                <div className="space-y-0.5 min-w-0">
                    <h2 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide truncate">
                        {item?.user_name || "অজ্ঞাত নাম"}
                    </h2>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="text-[11px]">একাউন্ট:</span>
                        <button
                            type="button"
                            onClick={handleCopyClick}
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition-all duration-200 border ${
                                accNoCopySuccess
                                    ? "bg-emerald-500 border-emerald-500 text-white"
                                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                            }`}
                            title="কপি করতে ক্লিক করুন"
                        >
                            <span>#{String(item?.acc_no || "").padStart(2, "0")}</span>
                            {accNoCopySuccess ? (
                                <HiCheck className="text-xs" />
                            ) : (
                                <HiClipboardDocument className="text-slate-400 text-[10px]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section - Action Link */}
            <div className="flex-shrink-0">
                <Link
                    to={`/user/${item?.acc_no}`}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm"
                >
                    <span>হিসাব দেখুন</span>
                    <HiArrowTopRightOnSquare className="text-xs" />
                </Link>
            </div>
        </div>
    );
};

export default UserManagetable2;
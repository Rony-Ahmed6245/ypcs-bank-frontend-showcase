import { HiReceiptPercent, HiCalendar, HiClock, HiCurrencyBangladeshi, HiExclamationCircle } from "react-icons/hi2";

const Table = ({ item, index }) => {
    return (
        <div className="flex justify-center items-center py-2">
            <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl w-full max-w-3xl border border-slate-200 overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-white">
                        <div className="p-1.5 bg-indigo-800/50 rounded-lg border border-indigo-700/50">
                            <HiReceiptPercent className="text-base text-indigo-300" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            রিসিভ নং: #{String(index).padStart(3, "0")}
                        </span>
                    </div>
                    
                    {item?.acc_no && (
                        <span className="text-[11px] font-semibold bg-indigo-900/80 text-indigo-200 px-2.5 py-1 rounded-full border border-indigo-700/50">
                            একাউন্ট: {item.acc_no}
                        </span>
                    )}
                </div>

                {/* Receipt Details */}
                <div className="p-4 sm:p-5 space-y-3">
                    {/* Month Section */}
                    <div className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                            <HiCalendar className="text-indigo-500 text-sm" />
                            <span>মাস:</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {item?.exdate || "N/A"}
                        </span>
                    </div>

                    {/* Deposit Date */}
                    <div className="flex justify-between items-center py-1.5 px-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-500">
                            <HiClock className="text-slate-400 text-sm" />
                            <span>টাকা জমাদানের তারিখ:</span>
                        </div>
                        <span className="font-semibold text-slate-700">
                            {item?.date || "N/A"}
                        </span>
                    </div>

                    {/* Deposited Amount */}
                    <div className="flex justify-between items-center py-2 px-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs">
                        <div className="flex items-center gap-2 text-emerald-800 font-medium">
                            <HiCurrencyBangladeshi className="text-emerald-600 text-base" />
                            <span>জমাকৃত টাকার পরিমাণ:</span>
                        </div>
                        <span className="font-bold text-emerald-600 text-sm">
                            {Number(item?.amount || 0).toFixed(2)} Tk
                        </span>
                    </div>

                    {/* Penalty Amount */}
                    <div className="flex justify-between items-center py-2 px-3 bg-amber-50/60 rounded-xl border border-amber-100 text-xs">
                        <div className="flex items-center gap-2 text-amber-800 font-medium">
                            <HiExclamationCircle className="text-amber-600 text-base" />
                            <span>জরিমানা টাকার পরিমাণ:</span>
                        </div>
                        <span className="font-bold text-amber-600 text-sm">
                            {Number(item?.pen_amount || 0).toFixed(2)} Tk
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
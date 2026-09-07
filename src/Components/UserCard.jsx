import { Link } from "react-router-dom";
import { HiUser, HiCreditCard, HiArrowRight } from "react-icons/hi2";

const UserCard = ({ user }) => {
    const { user_name, img, acc_no } = user || {};

    return (
        <div className="flex justify-center my-4">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-sm overflow-hidden flex flex-col">
                
                {/* Header Badge / ID */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-4 py-2.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5 text-xs text-indigo-200 font-medium">
                        <HiCreditCard className="text-sm text-indigo-400" />
                        <span>একাউন্ট কার্ড</span>
                    </div>
                    <span className="text-xs font-bold bg-indigo-900/80 px-2.5 py-0.5 rounded-full border border-indigo-700/50">
                        #{String(acc_no).padStart(2, "0")}
                    </span>
                </div>

                {/* Main Content Body */}
                <div className="p-6 flex flex-col items-center text-center space-y-4 flex-1">
                    
                    {/* User Avatar Image */}
                    <div className="relative">
                        {img ? (
                            <img
                                src={img}
                                alt={user_name || "User Avatar"}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-indigo-50 shadow-md"
                            />
                        ) : (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-indigo-50 border-4 border-indigo-100 flex items-center justify-center text-indigo-400 shadow-inner">
                                <HiUser className="text-4xl" />
                            </div>
                        )}
                    </div>

                    {/* User Info */}
                    <div className="space-y-1">
                        <h2 className="text-base sm:text-lg font-bold text-slate-800 uppercase tracking-wide">
                            {user_name || "অজ্ঞাত নাম"}
                        </h2>
                        <p className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full inline-block">
                            একাউন্ট নম্বর: {acc_no}
                        </p>
                    </div>
                </div>

                {/* Bottom Action Link */}
                <Link
                    to={`/user/${acc_no}`}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 text-xs font-semibold tracking-wider text-center transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    <span>হিসাব ও ট্রানজেকশন দেখুন</span>
                    <HiArrowRight className="text-sm" />
                </Link>
            </div>
        </div>
    );
};

export default UserCard;
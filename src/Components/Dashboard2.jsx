import { Link, Outlet } from "react-router-dom";
import { MdAccountCircle, MdManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { TiMail } from "react-icons/ti";

const Dashboard2 = () => {
    return (
        <div className="w-full">
            {/* Dashboard Navigation Bar */}
            <div className="bg-slate-900 border-b border-indigo-900/50 shadow-md mb-8">
                <div className="max-w-6xl mx-auto p-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                        {/* Log out Link - Amber/Slate accent */}
                        <Link
                            className="bg-amber-600/10 border border-amber-500/30 text-amber-400 hover:bg-amber-600 hover:text-white py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/admin'}
                        >
                            <CiLogout className="text-base shrink-0" />
                            <span>Log out</span>
                        </Link>

                        {/* Navigation Links */}
                        <Link
                            className="bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/dashboard/newAccount'}
                        >
                            <MdAccountCircle className="text-base shrink-0 text-indigo-400" />
                            <span className="truncate">নতুন একাউন্ট</span>
                        </Link>

                        <Link
                            className="bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/dashboard/manageAcc'}
                        >
                            <MdManageAccounts className="text-base shrink-0 text-indigo-400" />
                            <span className="truncate">সকল একাউন্ট</span>
                        </Link>

                        <Link
                            className="bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/dashboard/dp'}
                        >
                            <IoIosAddCircleOutline className="text-base shrink-0 text-emerald-400" />
                            <span className="truncate">টাকা জমা</span>
                        </Link>

                        <Link
                            className="bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/dashboard/pay'}
                        >
                            <AiOutlineHistory className="text-base shrink-0 text-emerald-400" />
                            <span className="truncate">জমা হিস্টোরি</span>
                        </Link>

                        <Link
                            className="bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase flex items-center justify-center gap-1.5 shadow-sm"
                            to={'/dashboard/guide'}
                        >
                            <TiMail className="text-base shrink-0 text-indigo-400" />
                            <span className="truncate">গাইড</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Nested Route Content */}
            <div className="max-w-7xl mx-auto px-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard2;
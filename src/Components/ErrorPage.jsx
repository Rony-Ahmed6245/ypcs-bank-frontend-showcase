import { Link } from "react-router-dom";
import { HiExclamationTriangle, HiHome } from "react-icons/hi2";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-center">
                {/* Top Banner Card */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-400 mb-3">
                        <HiExclamationTriangle className="text-3xl" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                        ত্রুটি দেখা দিয়েছে
                    </p>
                    <h1 className="text-2xl font-extrabold text-white tracking-wide">
                        সার্ভার সমস্যা
                    </h1>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                        দুঃখিত, সংযোগ স্থাপন করা সম্ভব হচ্ছে না অথবা সার্ভার সাময়িকভাবে বন্ধ আছে। কিছুক্ষণ পর আবার চেষ্টা করুন।
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm tracking-wider uppercase"
                    >
                        <HiHome className="text-lg" />
                        <span>হোম পেজে ফিরে যান</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { HiMagnifyingGlass, HiUsers, HiXMark } from "react-icons/hi2";
import Loading from "./Loading";

const User = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchedUser, setSearchedUser] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        e?.preventDefault();
        if (!searchTerm.trim()) return;

        const foundUser = users.find(
            (user) => String(user?.acc_no).trim() === searchTerm.trim()
        );
        setSearchedUser(foundUser || null);
        setHasSearched(true);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (hasSearched) setHasSearched(false);
        setSearchedUser(null);
    };

    const resetSearch = () => {
        setSearchTerm("");
        setSearchedUser(null);
        setHasSearched(false);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <Loading />
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner & Search Box */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md mb-6">
                <div className="flex items-center justify-between gap-4 mb-4 text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-indigo-800/50 rounded-xl border border-indigo-700/50">
                            <HiUsers className="text-2xl text-indigo-300" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">গ্রাহক সার্চ করুন</h1>
                            <p className="text-xs text-indigo-200">
                                সঠিক একাউন্ট নম্বর দিয়ে গ্রাহকের তথ্য খুঁজুন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="একাউন্ট নম্বর লিখুন (যেমন: 01)..."
                            className="w-full pl-10 pr-10 py-2.5 bg-white/10 border border-indigo-700/60 rounded-xl text-xs text-white placeholder-indigo-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-900 transition-all"
                        />
                        <HiMagnifyingGlass className="absolute left-3.5 top-3 text-indigo-300 text-sm" />
                        
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={resetSearch}
                                className="absolute right-3 top-2.5 text-indigo-300 hover:text-white transition-colors"
                            >
                                <HiXMark className="text-base" />
                            </button>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all duration-200 shadow-md flex items-center gap-1.5 focus:outline-none"
                    >
                        <HiMagnifyingGlass className="text-sm" />
                        <span>সার্চ</span>
                    </button>
                </form>
            </div>

            {/* User Details Display Area */}
            <div className="my-6">
                {searchedUser ? (
                    <UserCard key={searchedUser._id} user={searchedUser} />
                ) : hasSearched ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
                        <p className="text-slate-500 text-xs font-semibold">
                            "{searchTerm}" একাউন্ট নম্বরের কোনো গ্রাহক পাওয়া যায়নি।
                        </p>
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
                        <p className="text-slate-600 text-xs font-semibold">
                            উপরে একাউন্ট নম্বর টাইপ করে "সার্চ" বাটনে ক্লিক করুন।
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
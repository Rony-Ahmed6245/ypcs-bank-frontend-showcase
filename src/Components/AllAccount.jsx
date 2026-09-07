import { useEffect, useState } from "react";

const AllAccount = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                // Filter and sort by acc_no
                const sortedUsers = (data || [])
                    .filter((user) => user.acc_no && !isNaN(user.acc_no))
                    .sort((a, b) => Number(a.acc_no) - Number(b.acc_no));

                setUsers(sortedUsers);
            })
            .catch((err) => console.error("Error fetching accounts:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Top Banner Card */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                    সদস্য তালিকা
                </p>
                <h2 className="text-xl sm:text-2xl text-white font-extrabold tracking-wide">
                    মোট সদস্য সংখ্যা: <span className="text-emerald-400 font-black">{users.length}</span> জন
                </h2>
            </div>

            {/* Account List / Grid Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-indigo-900 px-6 py-4 border-b border-indigo-800">
                    <h1 className="text-center text-sm font-bold uppercase tracking-wider text-indigo-100">
                        সকল নিবন্ধিত অ্যাকাউন্ট
                    </h1>
                </div>

                <div className="p-4 sm:p-6">
                    {loading ? (
                        <div className="text-center py-10 text-slate-500 font-semibold text-sm">
                            তথ্য লোড হচ্ছে...
                        </div>
                    ) : users.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {users.map((user, index) => (
                                <div
                                    key={user._id || user.id || index}
                                    className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-md group"
                                >
                                    {/* User Image */}
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-200 overflow-hidden shrink-0 border-2 border-indigo-100 group-hover:border-indigo-300 transition-all">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={user.img}
                                            alt={user.user_name}
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/150?text=User";
                                            }}
                                        />
                                    </div>

                                    {/* User Details */}
                                    <div className="overflow-hidden">
                                        <h3 className="text-base font-bold text-slate-800 truncate">
                                            {user.user_name}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5">
                                            একাউন্ট নম্বর:
                                            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 font-bold text-emerald-600 text-sm">
                                                {String(user.acc_no).padStart(2, "0")}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-slate-400 py-10 text-sm">
                            কোনো অ্যাকাউন্ট রেকর্ড পাওয়া যায়নি।
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllAccount;
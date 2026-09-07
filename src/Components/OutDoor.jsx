import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserManagetable2 from "./UserManagetable2";
import { HiMagnifyingGlass, HiUsers } from "react-icons/hi2";

const OutDoor = () => {
    const [users, setUsers] = useState([]); // State for all users
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users

    const data = useLoaderData([]) || []; // Fetch data using loader

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                const sortedUsers = (data || [])
                    .filter((user) => user.acc_no && !isNaN(user.acc_no))
                    .sort((a, b) => Number(a.acc_no) - Number(b.acc_no));

                setUsers(sortedUsers);
                setFilteredUsers(sortedUsers); // Initially show all users
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Update filtered users based on the search term
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredUsers(users);
        } else {
            const filterPay = data.filter((item) => item.exdate === searchTerm.trim());
            const userFilter = users.filter((user) =>
                filterPay.some((item) => item.acc_no === user.acc_no)
            );
            setFilteredUsers(userFilter);
        }
    }, [searchTerm, users, data]);

    const handleDelete = async (accountId) => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "অ্যাকাউন্টটি ডিলিট করতে যাচ্ছেন!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#475569",
            confirmButtonText: "হ্যাঁ, ডিলিট করুন",
            cancelButtonText: "বাতিল",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(
                        `https://bank-server-theta.vercel.app/v1/userBankAccounts/${accountId}`,
                        {
                            method: "DELETE",
                        }
                    );

                    if (response.ok) {
                        setUsers((prevUsers) =>
                            prevUsers.filter((user) => user._id !== accountId)
                        );
                        setFilteredUsers((prevFiltered) =>
                            prevFiltered.filter((user) => user._id !== accountId)
                        );
                        Swal.fire({
                            title: "ডিলিট হয়েছে!",
                            text: "অ্যাকাউন্টটি সফলভাবে ডিলিট করা হয়েছে।",
                            icon: "success",
                            confirmButtonColor: "#059669",
                        });
                    } else {
                        console.error(`Error deleting account with ID: ${accountId}`);
                    }
                } catch (error) {
                    console.error("Error deleting account:", error);
                }
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-white">
                    <div className="p-3 bg-indigo-800/50 rounded-xl border border-indigo-700/50">
                        <HiUsers className="text-2xl text-indigo-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">আউটডোর মেম্বার তালিকা</h1>
                        <p className="text-xs text-indigo-200">
                            মোট অ্যাকাউন্ট: {users.length} টি
                        </p>
                    </div>
                </div>

                {/* Search Box */}
                <div className="relative w-full sm:w-72">
                    <input
                        type="text"
                        id="searchBox"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="মাস দিয়ে ফিল্টার করুন (যেমন: December-24)"
                        className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-indigo-700/60 rounded-xl text-xs text-white placeholder-indigo-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-900 transition-all"
                    />
                    <HiMagnifyingGlass className="absolute left-3.5 top-3 text-indigo-300 text-sm" />
                </div>
            </div>

            {/* Account List */}
            <div className="space-y-3">
                {users.length > 0 ? (
                    users.map((item, index) => {
                        const isFiltered = filteredUsers.some(
                            (user) => user.acc_no === item.acc_no
                        );
                        return (
                            <div
                                key={item._id}
                                className={`rounded-xl border transition-all duration-200 ${
                                    isFiltered
                                        ? "bg-white border-slate-200 hover:border-indigo-300 shadow-sm"
                                        : "bg-rose-50/70 border-rose-200 opacity-75"
                                }`}
                            >
                                <UserManagetable2
                                    item={item}
                                    index={index + 1}
                                    handleDelete={handleDelete}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs font-semibold">
                        কোনো অ্যাকাউন্ট ডাটা পাওয়া যায়নি।
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutDoor;
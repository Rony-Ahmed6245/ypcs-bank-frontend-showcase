import { useLoaderData } from "react-router-dom";
import PayHistryTable from "./PayHistryTable";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { HiMagnifyingGlass, HiReceiptPercent } from "react-icons/hi2";

const PaymentHistry = () => {
    const [amounts, setAmounts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const data = useLoaderData([]) || [];

    useEffect(() => {
        setAmounts(data);
    }, [data]);

    const handleDelete = async (accountId) => {
        try {
            const result = await Swal.fire({
                title: "আপনি কি নিশ্চিত?",
                text: "এই জমার হিস্ট্রিটি স্থায়ীভাবে ডিলিট হয়ে যাবে!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dc2626",
                cancelButtonColor: "#475569",
                confirmButtonText: "হ্যাঁ, ডিলিট করুন",
                cancelButtonText: "বাতিল",
            });

            if (result.isConfirmed) {
                const response = await fetch(
                    `https://bank-server-theta.vercel.app/v1/userAmounts/${accountId}`,
                    {
                        method: "DELETE",
                    }
                );

                if (response.ok) {
                    setAmounts((prevAmounts) =>
                        prevAmounts.filter((item) => item._id !== accountId)
                    );
                    Swal.fire({
                        title: "ডিলিট হয়েছে!",
                        text: "জমার হিস্ট্রি সফলভাবে ডিলিট করা হয়েছে।",
                        icon: "success",
                        confirmButtonColor: "#059669",
                    });
                } else {
                    throw new Error(`Error deleting record ID: ${accountId}`);
                }
            }
        } catch (error) {
            console.error("Error deleting record:", error);
            Swal.fire({
                title: "ত্রুটি!",
                text: "হিস্ট্রি ডিলিট করতে সমস্যা হয়েছে।",
                icon: "error",
                confirmButtonColor: "#dc2626",
            });
        }
    };

    // Filter data based on account number (Exact or Includes)
    const filteredAmounts = searchQuery
        ? amounts.filter(
              (item) => String(item?.acc_no || "").trim() === searchQuery.trim()
          )
        : amounts;

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner & Search Box */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-white">
                    <div className="p-3 bg-indigo-800/50 rounded-xl border border-indigo-700/50">
                        <HiReceiptPercent className="text-2xl text-indigo-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">পেমেন্ট হিস্ট্রি রেকর্ড</h1>
                        <p className="text-xs text-indigo-200">
                            মোট জমার সংখ্যা: {amounts.length} টি
                        </p>
                    </div>
                </div>

                {/* Search Box */}
                <div className="relative w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="সঠিক একাউন্ট নম্বর লিখুন..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-indigo-700/60 rounded-xl text-xs text-white placeholder-indigo-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-900 transition-all"
                    />
                    <HiMagnifyingGlass className="absolute left-3.5 top-3 text-indigo-300 text-sm" />
                </div>
            </div>

            {/* Payment History Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white text-xs font-semibold tracking-wider">
                                <th className="py-3.5 px-3 text-center border-b border-slate-800">
                                    নং
                                </th>
                                <th className="py-3.5 px-3 text-center border-b border-slate-800">
                                    একাউন্ট নম্বর
                                </th>
                                <th className="py-3.5 px-3 text-right border-b border-slate-800">
                                    জমাকৃত টাকা
                                </th>
                                <th className="py-3.5 px-3 text-right border-b border-slate-800">
                                    জরিমানা
                                </th>
                                <th className="py-3.5 px-3 text-center border-b border-slate-800">
                                    মাস
                                </th>
                                <th className="py-3.5 px-3 text-center border-b border-slate-800">
                                    জমার তারিখ
                                </th>
                                <th className="py-3.5 px-3 text-center border-b border-slate-800">
                                    ডিলিট
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredAmounts.length > 0 ? (
                                filteredAmounts.map((item, index) => (
                                    <PayHistryTable
                                        key={item._id}
                                        item={item}
                                        index={index + 1}
                                        handleDelete={() => handleDelete(item._id)}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center py-10 text-slate-400 text-xs font-semibold"
                                    >
                                        কোনো জমার হিস্ট্রি পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistry;
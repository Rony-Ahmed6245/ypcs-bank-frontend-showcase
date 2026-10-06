
import Swal from "sweetalert2";
import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserManagetable2 from "./UserManagetable2";

import {
    HiMagnifyingGlass,
    HiUsers,
    HiArrowDownTray,
    HiXMark,
} from "react-icons/hi2";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const OutDoor = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const data = useLoaderData() || [];

    /* -----------------------------------------
       Fetch all bank account users
    ----------------------------------------- */
    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                const sortedUsers = (data || [])
                    .filter(
                        (user) =>
                            user.acc_no &&
                            !isNaN(Number(user.acc_no))
                    )
                    .sort(
                        (a, b) =>
                            Number(a.acc_no) - Number(b.acc_no)
                    );

                setUsers(sortedUsers);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    /* -----------------------------------------
       Create unique Month-Year list
       Example: December-24
    ----------------------------------------- */
    const monthOptions = useMemo(() => {
        const months = [
            ...new Set(
                data
                    .map((item) => item.exdate)
                    .filter(Boolean)
            ),
        ];

        return months.sort((a, b) => {
            const dateA = new Date(`01-${a}`);
            const dateB = new Date(`01-${b}`);

            return dateB - dateA;
        });
    }, [data]);

    /* -----------------------------------------
       Find unpaid users

       Logic:
       selected month payment records
       -> paid account numbers
       -> users NOT in paid list
    ----------------------------------------- */
    const unpaidUsers = useMemo(() => {
        if (!searchTerm) {
            return users;
        }

        const selectedMonth = searchTerm.trim();

        // Payment records for selected month
        const monthlyPayments = data.filter(
            (item) =>
                String(item.exdate).trim() === selectedMonth
        );

        // Account numbers that already paid
        const paidAccountNumbers = new Set(
            monthlyPayments.map((item) =>
                String(item.acc_no).trim()
            )
        );

        // Only unpaid users
        return users.filter(
            (user) =>
                !paidAccountNumbers.has(
                    String(user.acc_no).trim()
                )
        );
    }, [searchTerm, users, data]);

    /* -----------------------------------------
       Download unpaid members PDF
    ----------------------------------------- */
    const handleDownloadPDF = () => {
        if (!searchTerm) {
            Swal.fire({
                title: "মাস নির্বাচন করুন",
                text: "PDF ডাউনলোড করার আগে একটি মাস নির্বাচন করুন।",
                icon: "warning",
                confirmButtonColor: "#4f46e5",
            });

            return;
        }

        if (unpaidUsers.length === 0) {
            Swal.fire({
                title: "কোনো বকেয়া নেই",
                text: `${searchTerm} মাসে কোনো unpaid member পাওয়া যায়নি।`,
                icon: "success",
                confirmButtonColor: "#059669",
            });

            return;
        }

        const pdf = new jsPDF();

        /* -----------------------------------------
           PDF Header
        ----------------------------------------- */
     

        pdf.setFontSize(11);
        pdf.setFont("helvetica", "normal");

        pdf.text(
            `Payment Month: ${searchTerm}`,
            14,
            30
        );

        pdf.text(
            `Total Unpaid Members: ${unpaidUsers.length}`,
            14,
            37
        );

        /* -----------------------------------------
           PDF Table
        ----------------------------------------- */
        const tableData = unpaidUsers.map(
            (user, index) => [
                index + 1,
                user.acc_no || "",

            ]
        );

        autoTable(pdf, {
            startY: 45,

            head: [
                [
                    "SL",
                    "Account No",
                    
                
                ],
            ],

            body: tableData,

            theme: "grid",

            styles: {
                fontSize: 9,
                cellPadding: 2,
                valign: "middle",
            },

            headStyles: {
                fontStyle: "bold",
            },

            columnStyles: {
                0: {
                    cellWidth: 12,
                },
                1: {
                    cellWidth: 35,
                },
                2: {
                    cellWidth: 70,
                },
                3: {
                    cellWidth: 45,
                },
            },
        });

        /* -----------------------------------------
           PDF Footer
        ----------------------------------------- */
        const pageCount =
            pdf.internal.getNumberOfPages();

        for (
            let i = 1;
            i <= pageCount;
            i++
        ) {
            pdf.setPage(i);

            pdf.setFontSize(8);

            pdf.text(
                `Page ${i} of ${pageCount}`,
                105,
                290,
                {
                    align: "center",
                }
            );
        }

        /* -----------------------------------------
           Download
        ----------------------------------------- */
        pdf.save(
            `Outdoor-Unpaid-${searchTerm}.pdf`
        );
    };

    /* -----------------------------------------
       Delete Account
    ----------------------------------------- */
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
            if (!result.isConfirmed) return;

            try {
                const response = await fetch(
                    `https://bank-server-theta.vercel.app/v1/userBankAccounts/${accountId}`,
                    {
                        method: "DELETE",
                    }
                );

                if (response.ok) {
                    setUsers((prevUsers) =>
                        prevUsers.filter(
                            (user) =>
                                user._id !== accountId
                        )
                    );

                    Swal.fire({
                        title: "ডিলিট হয়েছে!",
                        text: "অ্যাকাউন্টটি সফলভাবে ডিলিট করা হয়েছে।",
                        icon: "success",
                        confirmButtonColor: "#059669",
                    });
                } else {
                    throw new Error(
                        "Failed to delete account"
                    );
                }
            } catch (error) {
                console.error(
                    "Error deleting account:",
                    error
                );

                Swal.fire({
                    title: "সমস্যা হয়েছে!",
                    text: "অ্যাকাউন্ট ডিলিট করা যায়নি।",
                    icon: "error",
                    confirmButtonColor: "#dc2626",
                });
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">

            {/* =====================================
                HEADER
            ===================================== */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-6 rounded-2xl shadow-md mb-6">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

                    {/* Title */}
                    <div className="flex items-center gap-3 text-white w-full lg:w-auto">

                        <div className="p-3 bg-indigo-800/50 rounded-xl border border-indigo-700/50">
                            <HiUsers className="text-2xl text-indigo-300" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold">
                                আউটডোর মেম্বার তালিকা
                            </h1>

                            <p className="text-xs text-indigo-200 mt-1">
                                মোট অ্যাকাউন্ট:{" "}
                                {users.length} টি
                            </p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">

                        {/* Month Filter */}
                        <div className="relative w-full sm:w-64">

                            <HiMagnifyingGlass className="absolute left-3 top-3 text-indigo-300 text-sm pointer-events-none" />

                            <select
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(
                                        e.target.value
                                    )
                                }
                                className="w-full pl-9 pr-8 py-2.5 bg-slate-800 border border-indigo-700/60 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                            >
                                <option
                                    value=""
                                    className="text-slate-900"
                                >
                                    মাস ও বছর নির্বাচন করুন
                                </option>

                                {monthOptions.map(
                                    (month) => (
                                        <option
                                            key={month}
                                            value={month}
                                            className="text-slate-900"
                                        >
                                            {month}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        {/* Clear */}
                        {searchTerm && (
                            <button
                                onClick={() =>
                                    setSearchTerm("")
                                }
                                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
                                title="Filter Clear"
                            >
                                <HiXMark className="text-lg" />
                            </button>
                        )}

                        {/* PDF */}
                        <button
                            onClick={handleDownloadPDF}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md transition-all"
                        >
                            <HiArrowDownTray className="text-base" />

                            PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* =====================================
                FILTER INFORMATION
            ===================================== */}
            {searchTerm && (
                <div className="mb-5 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">

                    <div className="flex flex-col sm:flex-row justify-between gap-2">

                        <div>
                            <p className="text-xs text-slate-500">
                                নির্বাচিত মাস
                            </p>

                            <p className="font-bold text-indigo-700">
                                {searchTerm}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                পরিশোধ করেনি
                            </p>

                            <p className="font-bold text-rose-600">
                                {unpaidUsers.length} জন
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* =====================================
                ACCOUNT LIST
            ===================================== */}
            <div className="space-y-3">

                {unpaidUsers.length > 0 ? (
                    unpaidUsers.map(
                        (item, index) => (
                            <div
                                key={item._id}
                                className="rounded-xl border bg-white border-slate-200 hover:border-indigo-300 shadow-sm transition-all duration-200"
                            >
                                <UserManagetable2
                                    item={item}
                                    index={index + 1}
                                    handleDelete={
                                        handleDelete
                                    }
                                />
                            </div>
                        )
                    )
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">

                        <HiUsers className="mx-auto text-4xl text-slate-300 mb-3" />

                        <p className="text-sm font-semibold text-slate-500">
                            {searchTerm
                                ? `${searchTerm} মাসে কোনো unpaid member পাওয়া যায়নি।`
                                : "প্রথমে একটি মাস নির্বাচন করুন।"}
                        </p>

                        {searchTerm && (
                            <p className="text-xs text-slate-400 mt-2">
                                এই মাসের সকল সদস্য টাকা
                                পরিশোধ করেছে।
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutDoor;


import Swal from "sweetalert2";

const DpFrom = () => {
    const handleDepositData = async (e) => {
        e.preventDefault();

        const acc_no = e.target.acc_no.value.trim();
        const amount = e.target.amount.value.trim();
        const pen_amount = e.target.pen_amount.value.trim();
        const exdate = formatDate1(e.target.exdate.value);
        const date = formatDate(e.target.date.value);

        // Validation: Account number (exactly 2 digits)
        if (!validateAccountNumber(acc_no)) {
            Swal.fire({
                icon: "warning",
                title: "ভুল একাউন্ট নম্বর",
                text: "একাউন্ট নম্বর অবশ্যই ২ সংখ্যার হতে হবে এবং ইংরেজি সংখ্যায় লিখুন।",
                confirmButtonColor: "#4f46e5",
            });
            return;
        }

        // Validation: Amount and Penalty (numeric only)
        if (!validateNumeric(amount) || !validateNumeric(pen_amount)) {
            Swal.fire({
                icon: "warning",
                title: "ইনপুট ত্রুটি",
                text: "জমাকৃত টাকা এবং জরিমানা অবশ্যই ইংরেজি সংখ্যায় লিখুন।",
                confirmButtonColor: "#4f46e5",
            });
            return;
        }

        // Validation: Dates
        if (!exdate || !date) {
            Swal.fire({
                icon: "warning",
                title: "তারিখ প্রয়োজন",
                text: "মাস এবং জমার তারিখ অবশ্যই প্রদান করতে হবে।",
                confirmButtonColor: "#4f46e5",
            });
            return;
        }

        const depositFormData = { acc_no, amount, pen_amount, date, exdate };

        try {
            const response = await fetch("https://bank-server-theta.vercel.app/v1/userAmounts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(depositFormData),
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "সফল হয়েছে!",
                    text: "টাকা সফলভাবে জমা হয়েছে।",
                    confirmButtonColor: "#059669",
                });
                e.target.reset();
            } else {
                const errorData = await response.json();
                Swal.fire({
                    icon: "error",
                    title: "ব্যর্থ হয়েছে",
                    text: errorData.message || "জমা করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
                    confirmButtonColor: "#4f46e5",
                });
            }
        } catch (error) {
            console.error("Error creating deposit record:", error);
            Swal.fire({
                icon: "error",
                title: "সার্ভার ত্রুটি",
                text: "কিছু সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।",
                confirmButtonColor: "#4f46e5",
            });
        }
    };

    const validateAccountNumber = (text) => /^[0-9]{2}$/.test(text);
    const validateNumeric = (value) => /^[0-9]+$/.test(value);

    const formatDate = (inputDate) => {
        if (!inputDate) return "";
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate().toString().padStart(2, "0");
        const month = monthNames[dateObject.getMonth()];
        const year = dateObject.getFullYear().toString().slice(-2);

        return `${day}th-${month}-${year}`;
    };

    const formatDate1 = (inputDate) => {
        if (!inputDate) return "";
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dateObject = new Date(inputDate);
        const month = monthNames[dateObject.getMonth()];
        const year = dateObject.getFullYear().toString().slice(-2);

        return `${month}-${year}`;
    };

    return (
        <div className="max-w-xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Form Card Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-center">
                    <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                        ড্যাশবোর্ড এন্ট্রি
                    </p>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                        টাকা জমা ফর্ম
                    </h1>
                </div>

                {/* Form Body */}
                <form onSubmit={handleDepositData} className="p-6 sm:p-8 space-y-4">
                    {/* Account Number */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                            একাউন্ট নম্বর (২ সংখ্যার ইংরেজিতে)
                        </label>
                        <input
                            name="acc_no"
                            required
                            placeholder="যেমন: 01"
                            type="text"
                            maxLength={2}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 placeholder-slate-400 text-sm"
                        />
                    </div>

                    {/* Amount & Penalty Amount Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                জমাকৃত টাকা
                            </label>
                            <input
                                name="amount"
                                required
                                defaultValue={250}
                                type="number"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 font-bold text-emerald-600 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                জরিমানা (যদি থাকে)
                            </label>
                            <input
                                name="pen_amount"
                                required
                                placeholder="0"
                                defaultValue={0}
                                type="number"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 text-sm"
                            />
                        </div>
                    </div>

                    {/* Expiration/For Month Date */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                            কোন মাসের টাকা
                        </label>
                        <input
                            name="exdate"
                            required
                            type="date"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 text-sm"
                        />
                    </div>

                    {/* Deposit Date */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                            জমার তারিখ
                        </label>
                        <input
                            name="date"
                            required
                            type="date"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 text-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm tracking-wider uppercase mt-4"
                    >
                        জমা করুন
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DpFrom;
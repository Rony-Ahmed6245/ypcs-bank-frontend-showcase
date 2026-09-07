import { useState } from "react";
import Swal from "sweetalert2";

const AccountForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to validate Bangla input
    const validateBangla = (text) => {
        const banglaRegex = /^[\u0980-\u09FF\s]+$/; // Bangla characters and spaces
        return banglaRegex.test(text);
    };

    // Function to validate English input (2 digits for acc_no)
    const validateAccountNumber = (text) => {
        const accountRegex = /^[0-9]{2}$/; // Exactly 2 digits
        return accountRegex.test(text);
    };

    const handleUserData = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        const user_name = e.target.userName.value.trim();
        const acc_no = e.target.acc_no.value.trim();
        const image = e.target.img.files[0];

        // Validation
        if (!user_name) {
            Swal.fire({
                icon: "warning",
                title: "সতর্কতা",
                text: "নাম অবশ্যই প্রদান করতে হবে।",
                confirmButtonColor: "#3730a3"
            });
            return;
        }

        if (!validateBangla(user_name)) {
            Swal.fire({
                icon: "warning",
                title: "সতর্কতা",
                text: "নাম শুধুমাত্র বাংলায় লিখুন।",
                confirmButtonColor: "#3730a3"
            });
            return;
        }

        if (!acc_no) {
            Swal.fire({
                icon: "warning",
                title: "সতর্কতা",
                text: "একাউন্ট নম্বর অবশ্যই প্রদান করতে হবে।",
                confirmButtonColor: "#3730a3"
            });
            return;
        }

        if (!validateAccountNumber(acc_no)) {
            Swal.fire({
                icon: "warning",
                title: "সতর্কতা",
                text: "একাউন্ট নম্বর অবশ্যই ২ সংখ্যার হতে হবে এবং ইংরেজিতে লিখুন।",
                confirmButtonColor: "#3730a3"
            });
            return;
        }

        if (!image) {
            Swal.fire({
                icon: "warning",
                title: "সতর্কতা",
                text: "একটি ছবি নির্বাচন করুন।",
                confirmButtonColor: "#3730a3"
            });
            return;
        }

        setLoading(true);

        // Create FormData object to append the image
        const formData = new FormData();
        formData.append("image", image);

        try {
            // Upload image to ImgBB
            const imgbbResponse = await fetch(
                "https://api.imgbb.com/1/upload?key=fdcd6ed14a8ccf736515825c22b2b1d1",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!imgbbResponse.ok) {
                throw new Error("Error uploading image to ImgBB");
            }

            const imgbbData = await imgbbResponse.json();
            const imgUrl = imgbbData.data.url;

            // Save user data to server
            const userFormData = { user_name, acc_no, img: imgUrl };
            const response = await fetch(
                "https://bank-server-theta.vercel.app/v1/userBankAccount",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userFormData),
                }
            );

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "সফলতা!",
                    text: "নতুন একাউন্ট সফলভাবে তৈরি হয়েছে!",
                    confirmButtonColor: "#059669"
                });
                setErrorMessage("");
                e.target.reset();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || "একাউন্ট তৈরি করতে সমস্যা হয়েছে।");
            }
        } catch (error) {
            console.error("Error creating account:", error);
            setErrorMessage("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Top Banner Card */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                    নতুন গ্রাহক নিবন্ধন
                </p>
                <h2 className="text-xl sm:text-2xl text-white font-extrabold tracking-wide">
                    নতুন একাউন্ট করুন
                </h2>
            </div>

            {/* Form Container Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-indigo-900 px-6 py-4 border-b border-indigo-800">
                    <h1 className="text-center text-sm font-bold uppercase tracking-wider text-indigo-100">
                        গ্রাহকের তথ্য ফর্ম
                    </h1>
                </div>

                <div className="p-6 sm:p-8">
                    <form onSubmit={handleUserData} className="space-y-5">
                        {/* User Name Input */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                নাম দিন (বাংলায়)
                            </label>
                            <input
                                type="text"
                                name="userName"
                                required
                                placeholder="যেমন: মোহাম্মদ রহিম"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 placeholder-slate-400 text-sm"
                            />
                        </div>

                        {/* Account Number Input */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                একাউন্ট নম্বর দিন (ইংরেজিতে)
                            </label>
                            <input
                                name="acc_no"
                                required
                                placeholder="যেমন: 01"
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 placeholder-slate-400 text-sm"
                            />
                        </div>

                        {/* Image Input */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                ছবি দিন
                            </label>
                            <input
                                name="img"
                                required
                                type="file"
                                accept="image/*"
                                className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-slate-200 rounded-xl cursor-pointer p-1"
                            />
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold text-center">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 disabled:opacity-50 text-sm tracking-wider uppercase"
                        >
                            {loading ? "প্রসেস করা হচ্ছে..." : "একাউন্ট খুলুন"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountForm;
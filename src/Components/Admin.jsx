import { useState } from "react";
import Dashboard2 from "./Dashboard2";
import AccountForm from "./AccountFrom";

const Admin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formData.email && formData.password;

        if (isValid) {
            const validUsername = "ronyahmed6245@gmail.com";
            const validPassword = "HellohellO";

            if (formData.email === validUsername && formData.password === validPassword) {
                setLoggedIn(true);
                setErrorMessage("");
            } else {
                setLoggedIn(false);
                setErrorMessage("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে। আবার চেষ্টা করুন।");
            }
        } else {
            setErrorMessage("ইমেইল এবং পাসওয়ার্ড দুটিই প্রদান করুন।");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {!isLoggedIn ? (
                    <div className="max-w-md mx-auto my-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        {/* Top Banner Card */}
                        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-center">
                            <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                                সিকিউর পোর্টাল
                            </p>
                            <h2 className="text-xl font-extrabold text-white tracking-wide">
                                ম্যানেজার লগইন
                            </h2>
                        </div>

                        {/* Form Section */}
                        <div className="p-6 sm:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                        ইমেইল
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 500 500">
                                                <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            id="logemail"
                                            placeholder="ইমেইল এড্রেস লিখুন"
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 placeholder-slate-400 text-sm"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                                        পাসওয়ার্ড
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 500 500">
                                                <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            id="logpass"
                                            placeholder="পাসওয়ার্ড লিখুন"
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-slate-800 placeholder-slate-400 text-sm"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Error Message Box */}
                                {errorMessage && (
                                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold text-center">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm tracking-wider uppercase mt-2"
                                    type="submit"
                                >
                                    লগইন করুন
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <Dashboard2 />
                        <AccountForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
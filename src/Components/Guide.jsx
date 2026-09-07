import { HiOutlineLightBulb, HiOutlineQuestionMarkCircle, HiOutlineExclamationCircle, HiOutlineShieldCheck } from "react-icons/hi2";

const Guide = () => {
    const guides = [
        {
            id: 1,
            title: "নতুন একাউন্ট খোলা",
            desc: "নতুন সদস্য যুক্ত করতে 'নতুন একাউন্ট খুলুন' অপশনে যান। সদস্যের নাম, মোবাইল নম্বর এবং ছবি সঠিক তথ্যের সাথে আপলোড করুন।",
            icon: <HiOutlineLightBulb className="text-xl text-emerald-500" />,
        },
        {
            id: 2,
            title: "টাকা জমা দেওয়া (Deposit)",
            desc: "সদস্যের টাকা জমার সময় একাউন্ট নম্বর অবশ্যই ২ সংখ্যার হতে হবে (যেমন: 01, 02)। জরিমানা থাকলে সঠিক অ্যামাউন্ট দিয়ে জমার তারিখ নির্বাচন করুন।",
            icon: <HiOutlineShieldCheck className="text-xl text-indigo-400" />,
        },
        {
            id: 3,
            title: "হিস্টোরি পর্যবেক্ষণ",
            desc: "সকল জমার হিস্টোরি এক জায়গায় দেখতে 'জমার সকল হিস্টোরি' সেকশনে যান। সেখানে নির্দিষ্ট মাসের হিসাব ও জরিমানা একসাথে দেখতে পাবেন।",
            icon: <HiOutlineQuestionMarkCircle className="text-xl text-amber-400" />,
        },
        {
            id: 4,
            title: "সিকিউরিটি নির্দেশনাবলী",
            desc: "ড্যাশবোর্ডের কাজ শেষ হওয়ার পর অবশ্যই 'Log Out' বাটনে ক্লিক করে বের হয়ে যান, যাতে আপনার তথ্য নিরাপদ থাকে।",
            icon: <HiOutlineExclamationCircle className="text-xl text-rose-400" />,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md text-center mb-8">
                <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                    ব্যবহারকারীর সহায়িকা
                </p>
                <h1 className="text-xl sm:text-2xl text-white font-extrabold tracking-wide">
                    সিস্টেম ব্যবহার করার নিয়মাবলী
                </h1>
            </div>

            {/* Guide Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guides.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-slate-100 rounded-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-bold text-slate-800">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Help Note Box */}
            <div className="mt-8 bg-indigo-50 border border-indigo-100 p-5 rounded-2xl text-center">
                <p className="text-xs font-semibold text-indigo-900">
                    জরুরী যেকোনো কারিগরি সহায়তার জন্য যুব অগ্রযাত্রা সমবায় সমিতির অ্যাডমিন অথবা ক্যাশিয়ারের সাথে সরাসরি যোগাযোগ করুন।
                </p>
            </div>
        </div>
    );
};

export default Guide;
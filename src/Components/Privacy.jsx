import { HiShieldCheck, HiOutlineDocumentText } from "react-icons/hi2";

const Privacy = () => {
    const rules = [
        {
            id: "১",
            title: "সময়কাল ও সঞ্চয় ফেরত",
            desc: "সমিতির দ্বিতীয় মেয়াদের সময়কাল ৩ বছর (২০২৫-২০২৭ খ্রিষ্টাব্দ)। পরিকল্পিত মেয়াদ শেষ হওয়ার আগে কোনো সদস্যকে তার সঞ্চয়কৃত অর্থ হস্তান্তর করা হবে না।",
            subRules: [
                "মেয়াদ শেষ হওয়ার আগে কেউ সমিতি থেকে বিচ্ছিন্ন হলে তার ক্ষেত্রেও একই বিধান প্রযোজ্য হবে।",
            ],
        },
        {
            id: "২",
            title: "হিসাব স্থগিতকরণ ও মালিকানা পরিবর্তন",
            desc: "কোনো সদস্য তার চলতি হিসাব স্থগিত করতে চাইলে একমাস পূর্বে লিখিত আবেদনপত্রের মাধ্যমে দায়িত্বপ্রাপ্তদের জানাতে হবে।",
            subRules: [
                "হিসাব স্থগিতকরণ বা মালিকানা পরিবর্তনের ক্ষেত্রে ভর্তি ফি বাতিল বলে গণ্য হবে, এর সাথে অন্য কোনো জরিমানা আরোপ করা হবে না।",
            ],
        },
        {
            id: "৩",
            title: "মাসিক সঞ্চয় ও ভর্তি ফি",
            desc: "মাসিক সঞ্চয় ২৫০ টাকা এবং ভর্তি ফি ৩০০ টাকা যা মূল সঞ্চয়ের সাথে জমা থাকবে।",
        },
        {
            id: "৪",
            title: "সঞ্চয় জমার সময়সীমা ও নিয়মিত জরিমানা",
            desc: "প্রতি মাসের ১ থেকে ৭ তারিখের মধ্যে সঞ্চয় জমা দিতে হবে। সময়সীমা অতিক্রম করলে প্রতি মাসের জন্য ২০ টাকা জরিমানাসহ সঞ্চয় জমা দিতে হবে।",
        },
        {
            id: "৫",
            title: "বকেয়া সঞ্চয় ও সদস্যপদ বাতিল",
            desc: "একটানা তিন মাসের অধিক সঞ্চয় জমা দিতে ব্যর্থ হলে নিয়মিত জরিমানার পরিবর্তে ১০০ টাকা জরিমানাসহ সঞ্চয় জমা দিতে হবে।",
            subRules: [
                "একটানা ৬ মাসের অধিক সঞ্চয় জমা দিতে ব্যর্থ হলে ভর্তি ফি বাতিল বলে গণ্য হবে।",
            ],
        },
        {
            id: "৬",
            title: "জরিমানা ফান্ড ও ব্যবহার",
            desc: "জরিমানাবাবদ আদায়কৃত সম্পূর্ণ অর্থ সমিতির নিজস্ব ফান্ডে সংরক্ষিত থাকবে। এই অর্থ সমিতি পরিচালনা সংক্রান্ত কাজে ব্যবহার করা হবে। পরিকল্পিত মেয়াদ শেষ হলেও উক্ত অর্থ সদস্যদের মধ্যে বন্টিত হবে না। তবে উল্লেখ থাকে যে, সমিতির কার্যক্রম বন্ধ হয়ে গেলে সংশ্লিষ্ট মেয়াদের সদস্যদের মধ্যে উক্ত অর্থ সুষমভাবে বন্টিত হবে।",
        },
        {
            id: "৭",
            title: "লভ্যাংশ বন্টন বিধি",
            desc: "ব্যবসায়িক কাজে অর্জিত লভ্যাংশের ১০ শতাংশ সমিতির নিজস্ব ফান্ডে সংরক্ষিত থাকবে।",
            subRules: [
                "উক্ত ফান্ডের অর্থের বন্টনবিধি ৬ নং বিধির অনুরূপ হবে।",
                "বাকী ৯০ শতাংশ লভ্যাংশ সমিতির পরিকল্পিত মেয়াদ শেষে সকল সদস্যের মাঝে তাদের জমাকৃত অর্থের উপর ভিত্তি করে শতকরা হিসেবে বন্টন করা হবে।",
            ],
        },
        {
            id: "৮",
            title: "ব্যবসায়িক ক্ষতিপূরণ",
            desc: "ব্যবসায়িক কাজে আর্থিক ক্ষতি হলে সমিতির সকল সদস্যের জমাকৃত অর্থ হতে শতকরা হিসেবে উক্ত আর্থিক ক্ষতি কর্তন করা হবে।",
        },
        {
            id: "৯",
            title: "ফান্ডের নিরাপত্তা",
            desc: "ফান্ডের অর্থ ব্যবসায়িক কাজে বিনিয়োগ বা যে কোনো লাভ ক্ষতির আওতা মুক্ত থাকবে।",
        },
        {
            id: "১০",
            title: "সিদ্ধান্ত গ্রহণ ও সংশোধন",
            desc: "সমিতির সভায় উপস্থিত সদস্যদের মতামতের ভিত্তিতে যে কোনো সিদ্ধান্ত গ্রহণ/বর্জন/পরিবর্তন/সংশোধন করা যাবে।",
            subRules: [
                "যে কোনো সিদ্ধান্ত বাস্তবায়নের ক্ষেত্রে কমপক্ষে দুই-তৃতীয়াংশ সদস্যের সম্মতি থাকতে হবে।",
            ],
        },
        {
            id: "১১",
            title: "সদস্যপদ বাতিলকরণ",
            desc: "কোনো সদস্য সমিতির স্বার্থ পরিপন্থী কাজে যুক্ত থাকলে তার সদস্যপদ বাতিল করা হবে।",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-white">
                    <div className="p-3 bg-indigo-800/50 rounded-xl border border-indigo-700/50">
                        <HiShieldCheck className="text-2xl text-indigo-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">সমিতির বিধি ও নীতিমালা</h1>
                        <p className="text-xs text-indigo-200">
                            সকল সদস্যের জন্য নিয়মাবলী অনুসরন করা বাধ্যতামূলক
                        </p>
                    </div>
                </div>
            </div>

            {/* Rules Content */}
            <div className="space-y-4">
                {rules.map((rule) => (
                    <div
                        key={rule.id}
                        className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-all duration-200"
                    >
                        <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                                {rule.id}
                            </span>
                            <div className="space-y-1.5 w-full">
                                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                    {rule.title}
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                                    {rule.desc}
                                </p>

                                {/* Sub Rules (If Any) */}
                                {rule.subRules && rule.subRules.length > 0 && (
                                    <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1.5">
                                        {rule.subRules.map((sub, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100"
                                            >
                                                <HiOutlineDocumentText className="text-indigo-500 text-sm flex-shrink-0 mt-0.5" />
                                                <span className="leading-relaxed text-justify">
                                                    {sub}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Privacy;
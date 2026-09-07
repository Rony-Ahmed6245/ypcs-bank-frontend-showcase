import { FaPhone } from 'react-icons/fa6';

import img1 from "../assets/411089612_1016361566134727_6716276073552644705_n.jpg";
import img2 from "../assets/184979780_958930997986797_2530290806202001357_n.jpg";
import img3 from "../assets/torikul.jpg";

const Dev = () => {
    const committeeMembers = [
        {
            id: 1,
            name: "আশরাফুল ইসলাম",
            role: "সভাপতি",
            organization: "যুব অগ্রযাত্রা সমবায় সমিতি (YPCS)",
            address: "সরদারপাড়া, ভাঙ্গুড়া, পাবনা।",
            phone: "+8801776713610",
            img: img1,
        },
        {
            id: 2,
            name: "তরিকুল ইসলাম তুহিন",
            role: "সেক্রেটারি",
            organization: "যুব অগ্রযাত্রা সমবায় সমিতি (YPCS)",
            address: "সরদারপাড়া, ভাঙ্গুড়া, পাবনা।",
            phone: "+8801709132479",
            img: img3,
        },
        {
            id: 3,
            name: "বাবুল আক্তার আকিব",
            role: "ক্যাশিয়ার",
            organization: "যুব অগ্রযাত্রা সমবায় সমিতি (YPCS)",
            address: "সরদারপাড়া, ভাঙ্গুড়া, পাবনা।",
            phone: "+8801770159872",
            img: img2,
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md text-center mb-8">
                <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                    পরিচালনা পর্ষদ
                </p>
                <h1 className="text-xl sm:text-2xl text-white font-extrabold tracking-wide">
                    কমিটি সদস্যবৃন্দ
                </h1>
            </div>

            {/* Committee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {committeeMembers.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="p-6 text-center flex-1">
                            {/* Member Image */}
                            <div className="w-28 h-28 mx-auto rounded-2xl bg-slate-100 overflow-hidden border-2 border-indigo-100 group-hover:border-indigo-300 transition-all shadow-sm mb-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src={member.img}
                                    alt={member.name}
                                />
                            </div>

                            {/* Info */}
                            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">
                                {member.name}
                            </h2>
                            <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold rounded-full my-2">
                                {member.role}
                            </span>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                                {member.organization}
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">
                                {member.address}
                            </p>
                        </div>

                        {/* Call Button */}
                        <a
                            href={`tel:${member.phone}`}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 flex justify-center items-center gap-2 font-bold text-sm tracking-wider uppercase transition-all duration-200"
                        >
                            <FaPhone className="text-base" />
                            <span>কল করুন</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dev;
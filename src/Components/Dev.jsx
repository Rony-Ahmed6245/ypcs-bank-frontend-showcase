


import {  FaSquarePhone } from 'react-icons/fa6';


import img1 from "../assets/411089612_1016361566134727_6716276073552644705_n.jpg"
import img2 from "../assets/184979780_958930997986797_2530290806202001357_n.jpg"
import img3 from "../assets/torikul.jpg"


const Dev = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 ">

            {/* ---------------  */}
            <div className="grid grid-cols-1   my-2 md:px-4 px-4 mb-20">
            <div className="shadow rounded-xl bg-white p-4 w-full max-w-3xl mx-auto my-6">
            <div className="flex items-center justify-between gap-4">
                {/* Left - Profile Picture */}
                <div className="flex-shrink-0">
                    <img
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-blue-400"
                        src={img1}
                        alt="Ashraful Islam"
                    />
                </div>

                {/* Middle - Info */}
                <div className="flex-1 space-y-1">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">আশরাফুল ইসলাম</h1>
                    <p className="text-md md:text-lg font-semibold text-[#3B56B9]">সভাপতি</p>
                    <p className="text-sm md:text-base text-gray-600">
                        যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।
                    </p>
                </div>

                {/* Right - Call Button */}
                <div className="flex-shrink-0">
                    <a href="tel:+8801776713610" className="text-[#3B56B9] hover:text-blue-700 transition-all">
                        <FaSquarePhone className="text-3xl md:text-4xl" title="Call Now" />
                    </a>
                </div>
            </div>
        </div>
                {/* 22222222222 */}
                <div className="shadow rounded-xl bg-white p-4 w-full max-w-3xl mx-auto my-6">
            <div className="flex items-center justify-between gap-4">
                {/* Left - Profile Picture */}
                <div className="flex-shrink-0">
                    <img
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-blue-400"
                        src={img3}
                        alt="Tariqul Islam Tuhin"
                    />
                </div>

                {/* Middle - Info */}
                <div className="flex-1 space-y-1">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">তরিকুল ইসলাম তুহিন</h1>
                    <p className="text-md md:text-lg font-semibold text-[#3B56B9]">সেক্রেটারি</p>
                    <p className="text-sm md:text-base text-gray-600">
                        যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।
                    </p>
                </div>

                {/* Right - Call Button */}
                <div className="flex-shrink-0">
                    <a href="tel:+8801709132479" className="text-[#3B56B9] hover:text-blue-700 transition-all">
                        <FaSquarePhone className="text-3xl md:text-4xl" title="Call Now" />
                    </a>
                </div>
            </div>
        </div>

                {/* 33333333333333 */}
                <div className="shadow rounded-xl bg-white p-4 w-full max-w-3xl mx-auto my-2">
            <div className="flex items-center justify-between gap-4">
                {/* Left - Profile Picture */}
                <div className="flex-shrink-0">
                    <img
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-blue-400"
                        src={img2}
                        alt="Babul Akter Akib"
                    />
                </div>

                {/* Middle - Info */}
                <div className="flex-1 space-y-1">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">বাবুল আক্তার আকিব</h1>
                    <p className="text-md md:text-lg font-semibold text-[#3B56B9]">ক্যাশিয়ার</p>
                    <p className="text-sm md:text-base text-gray-600">
                        যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।
                    </p>
                </div>

                {/* Right - Call Button */}
                <div className="flex-shrink-0">
                    <a href="tel:+8801770159872" className="text-[#3B56B9] hover:text-blue-700 transition-all">
                        <FaSquarePhone className="text-3xl md:text-4xl" title="Call Now" />
                    </a>
                </div>
            </div>
        </div>
                {/* 444444444444444 */}
            
            </div>
        </div>
    );
};

export default Dev;
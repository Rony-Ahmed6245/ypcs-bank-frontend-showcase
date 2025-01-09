


import {  FaSquarePhone } from 'react-icons/fa6';


import img1 from "../assets/411089612_1016361566134727_6716276073552644705_n.jpg"
import img2 from "../assets/184979780_958930997986797_2530290806202001357_n.jpg"
import img3 from "../assets/torikul.jpg"


const Dev = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 ">

            {/* ---------------  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-4 px-4 mb-20">
                <div className=" shadow  rounded-md ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[200px] rounded-full" src={img1} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold ">আশরাফুল ইসলাম</h1>
                            <p className="text-center text-md font-semibold text-[#3B56B9]">সভাপতি</p>
                            <p className="text-center text-sm text-gray-500 px-4">
                            যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a href="tel:+8801776713610" ><FaSquarePhone className="text-[#3B56B9] text-2xl rounded-full" /></a>

                        </div>
                    </div>
                </div>
                {/* 22222222222 */}
                <div className=" shadow rounded-md ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[200px] rounded-full" src={img3} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold ">তরিকুল ইসলাম তুহিন</h1>
                            <p className="text-center text-md font-semibold text-[#3B56B9]">সেক্রেটারি </p>
                            <p className="text-center text-sm text-gray-500 px-4">যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।</p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a href="tel:+8801709132479" ><FaSquarePhone className=" text-2xl text-[#3B56B9] rounded-full" /></a>

                        </div>
                    </div>
                </div>

                {/* 33333333333333 */}
                <div className=" shadow rounded-md ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[200px] rounded-full" src={img2} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold ">বাবুল আক্তার আকিব</h1>
                            <p className="text-center text-md font-semibold text-[#3B56B9]">ক্যাশিয়ার</p>
                            <p className="text-center text-sm text-gray-500 px-4">
                                যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a href="tel:+8801770159872" ><FaSquarePhone className=" text-2xl text-[#3B56B9] rounded-full" /></a>

                        </div>
                    </div>
                </div>
                {/* 444444444444444 */}
            
            </div>
        </div>
    );
};

export default Dev;
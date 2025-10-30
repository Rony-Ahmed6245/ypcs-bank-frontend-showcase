


import { FaPhone, FaSquarePhone } from 'react-icons/fa6';


import img1 from "../assets/411089612_1016361566134727_6716276073552644705_n.jpg"
import img2 from "../assets/184979780_958930997986797_2530290806202001357_n.jpg"
import img3 from "../assets/torikul.jpg"


const Dev = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 ">

            {/* ---------------  */}
            <div className="grid grid-cols-1   my-2 md:px-4 px-4 mb-20">
                {/* 11111111111  */}
                <div className="border border-[#FA1C1E]  rounded">
                    <div className="p-4 ">
                        <div>
                            <figure className="w-full">
                                <img className="  " src={img1} alt="" />
                            </figure>
                        </div>
                        <div className="mt-3">
                            <h2 className=" text-[18px] text-black font-bold text-center uppercase">আশরাফুল ইসলাম</h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">সভাপতি</h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।</h2>
                        </div>
                    </div>

                    <div >
                        <a href="tel:+8801776713610" className="bg-[#FA1C1E] py-2 text-[20px] flex justify-center items-center text-white">
                            <FaPhone />
                        </a>
                    </div>
                </div>

                {/* 222222222222222222222222  */}
                <div className="border border-[#FA1C1E]  rounded">
                    <div className="p-4 ">
                        <div>
                            <figure className="w-full">
                                <img className="  " src={img3} alt="" />
                            </figure>
                        </div>
                        <div className="mt-3">
                            <h2 className=" text-[18px] text-black font-bold text-center uppercase">
                                তরিকুল ইসলাম তুহিন
                            </h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">সেক্রেটারি</h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।</h2>
                        </div>
                    </div>

                    <div >
                        <a href="tel:+8801709132479" className="bg-[#FA1C1E] py-2 text-[20px] flex justify-center items-center text-white">
                            <FaPhone />
                        </a>
                    </div>
                </div>

                {/* 333333333333  */}
                <div className="border border-[#FA1C1E]  rounded">
                    <div className="p-4 ">
                        <div>
                            <figure className="w-full">
                                <img className="  " src={img2} alt="" />
                            </figure>
                        </div>
                        <div className="mt-3">
                            <h2 className=" text-[18px] text-black font-bold text-center uppercase">
                                বাবুল আক্তার আকিব
                            </h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">ক্যাশিয়ার</h2>
                            <h2 className="font-bold text-[10px] text-black  text-center mb-6">যুব অগ্রযাত্রা সমবায় সমিতি (YPCS) সরদারপাড়া, ভাঙ্গুড়া, পাবনা।</h2>
                        </div>
                    </div>

                    <div >
                        <a href="tel:+8801770159872" className="bg-[#FA1C1E] py-2 text-[20px] flex justify-center items-center text-white">
                            <FaPhone />
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Dev;
// import Nav from "./Nav";

import { Link } from "react-router-dom";
import { FaUserLock } from "react-icons/fa6";
import { TbDeviceIpadHorizontalCog } from "react-icons/tb";





const Banner = () => {
    return (
        <div className=" h-[100vh] flex justify-center items-center">
                  <div className=" text-white z-50 fixed top-0 right-0 font-semibold mt-5 mr-4 "><Link to="/admin"><FaUserLock /></Link></div>
                  <div className=" text-white z-50 fixed top-0 left-0 font-semibold mt-5 ml-4 "><Link to="/me"><TbDeviceIpadHorizontalCog /></Link></div>
              
            <div className="bg-[#5378FC] w-full  fixed top-0 castom-bg">

                <div className="py-3 text-white text-center">
                    <h1 className="font-bold text-2xl">YPCS</h1>
                    <h2 className="text-xl">যুব অগ্রযাত্রা সমবায় সমিতি</h2>
                    <h2 className="text-sm">সরদার পাড়া, ভাঙ্গুড়া, পাবনা।</h2>
                    <h2 className="text-sm">স্থাপিত-২০২২</h2>
                </div>

            </div>
            {/* <Nav /> */}
            <div className="mt-10 flex justify-center items-center">
                <div className="grid md:grid-cols-1 grid-cols-1 gap-4 ">
                    <div className=" text-black rounded-sm text-center  field px-10 p-5 uppercase ]">
                        <Link to="/user">আপনার একাউন্ট দেখুন</Link>
                    </div>

                    <div className=" text-black  rounded-sm text-center  field px-10 p-5 uppercase "><Link to="/allAccount">সকল সদস্যবৃন্দ</Link></div>
                    <div className=" text-black rounded-sm text-center  field px-10 p-5 uppercase "><Link to="/dev">পরিচিতি ও যোগাযোগ</Link></div>
                  
                    <div className=" text-black rounded-sm text-center field px-10 p-5 uppercase "><Link to="/privacy">বিধি ও নীতিমালা </Link></div>
                </div>
            </div>



        </div>
    );
};

export default Banner;
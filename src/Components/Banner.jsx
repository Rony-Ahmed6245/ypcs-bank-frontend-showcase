// import Nav from "./Nav";

import { Link } from "react-router-dom";
import { FaUserClock, FaUserLock } from "react-icons/fa6";
import { TbDeviceIpadHorizontalCog } from "react-icons/tb";
import Account from './Account';
import { MdAccountBalance, MdAccountBalanceWallet, MdAdminPanelSettings, MdOutlineAdminPanelSettings, MdOutlineDeviceHub } from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";






const Banner = () => {
    return (
        <div className=" h-[100vh] flex justify-center items-center">
            {/* <div className=" text-white z-50 fixed top-0 right-0 font-semibold mt-5 mr-4 "><Link to="/admin"><FaUserLock /></Link></div>
            <div className=" text-white z-50 fixed top-0 left-0 font-semibold mt-5 ml-4 "><Link to="/me"><TbDeviceIpadHorizontalCog /></Link></div> */}

            <div className=" w-full  fixed top-0 bg-[#FA1C1E] py-5">

                <div className="py-3 text-white text-center pl-2">

                    <h2 className="text-xl">যুব অগ্রযাত্রা সমবায় সমিতি-YPCS</h2>
                    <h2 className="text-sm">সরদার পাড়া, ভাঙ্গুড়া-পাবনা।</h2>
                    <h2 className="text-sm">স্থাপিত-২০২২</h2>
                </div>

            </div>
            {/* <Nav /> */}
            <div className="mt-16 flex justify-center items-center">
                <div className="grid md:grid-cols-1 grid-cols-1 gap-2 ">
                    {/* <div className=" text-black font-semibold mx-2 rounded-sm text-center  border  p-10 uppercase ]">
                        <Link to="/user">একাউন্ট দেখুন</Link>
                    </div> */}
                    <div >
                        <Link className=" px-4 py-2 m-2 flex justify-between items-center  text-[#FA1C1E] bg-white shadow-lg text-[18px] border rounded-full  border-[#FA1C1E]  uppercase " to="/user">
                            <h1><FiSearch /></h1>
                            <h1 className="text-[10px] font-semibold">search accounts</h1>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 ">


                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/outdoor">
                                <h1><MdAccountBalanceWallet className="text-4xl " /></h1>
                                <h1>All accounts</h1>
                            </Link>
                        </div>

                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/fund">
                                <h1><RiFundsLine className="text-4xl " /></h1>
                                <h1>Total fund</h1>
                            </Link>
                        </div>

                

                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/dev">
                                <h1><FaUserClock className="text-4xl " /></h1>
                                <h1>Committee</h1>
                            </Link>
                        </div>


                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/admin">
                                <h1><MdOutlineAdminPanelSettings className="text-4xl " /></h1>
                                <h1>manager</h1>
                            </Link>
                        </div>

                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/privacy">
                                <h1><MdAdminPanelSettings className="text-4xl " /></h1>
                                <h1>privacy policy</h1>
                            </Link>
                        </div>

                        <div>
                            <Link className=" px-10 py-2 m-2 flex-col justify-center items-center flex bg-[#FA1C1E] text-white shadow-lg text-[8px] border rounded    uppercase " to="/me">
                                <h1><MdOutlineDeviceHub className="text-4xl " /></h1>
                                <h1>Developer</h1>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default Banner;
import { Link, Outlet } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { TiMail } from "react-icons/ti";




const Dashboard2 = () => {
    return (
        <div>
            <div className=" ">
                <div className="grid grid-cols-2 md:grid-cols-6 bg-blue-600  max-w-5xl mx-auto gap-1 mt-0 py-4  mb-10">
                    <Link className="bg-[#ED0B5A] border shadow-md text-white py-1 md:px-4 px-2 rounded-md mx-1 font-semibold text-center  text-sm md:text-md hover:bg-red-600 transition-all  uppercase flex justify-center md:justify-center items-center gap-1" to={'/admin'}><CiLogout />Log out</Link>
                    <Link className="bg-white border shadow-md hover:text-white text-black py-1 md:px-4 px-2 rounded mx-1 font-semibold text-center text-sm md:text-md hover:bg-blue-600 transition-all uppercase flex justify-center items-center gap-1" to={'/dashboard/newAccount'}><MdAccountCircle />নতুন একাউন্ট খুলুন</Link>
                    <Link className="bg-white border shadow-md hover:text-white text-black py-1 md:px-4 px-2 rounded mx-1 font-semibold text-center text-sm md:text-md hover:bg-blue-600 transition-all uppercase flex justify-center items-center gap-1" to={'/dashboard/manageAcc'}><MdManageAccounts />সকল একাউন্ট</Link>
                    <Link className="bg-white border shadow-md hover:text-white text-black py-1 md:px-4 px-2 rounded mx-1 font-semibold text-center text-sm md:text-md hover:bg-blue-600 transition-all uppercase flex justify-center items-center gap-1" to={'/dashboard/dp'}><IoIosAddCircleOutline />টাকা জমাদিন</Link>
                    <Link className="bg-white border shadow-md hover:text-white text-black py-1 md:px-4 px-2 rounded mx-1 font-semibold text-center text-sm md:text-md hover:bg-blue-600 transition-all uppercase flex justify-center items-center gap-1" to={'/dashboard/pay'}><AiOutlineHistory />জমার সকল হিস্টোরি</Link>
                    <Link className="bg-white border shadow-md hover:text-white text-black py-1 md:px-4 px-2 rounded mx-1 font-semibold text-center text-sm md:text-md hover:bg-blue-600 transition-all uppercase flex justify-center items-center gap-1" to={'/dashboard/guide'}><TiMail />গাইড</Link>
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard2;
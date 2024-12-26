// import Nav from "./Nav";

import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className=" h-[100vh] flex justify-center items-center">
            {/* <Nav /> */}
            <div className="">
                <div className="grid md:grid-cols-1 grid-cols-1 gap-4 p-2">
                    <div className=" text-white font-semibold rounded-sm text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]">
                        <Link to="/user">আপনার সঞ্চয় দেখুন</Link>
                    </div>
                    <div className=" text-white font-semibold rounded-sm text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]"><Link to="/admin">মেনেজার এক্সেস</Link></div>
                    <div className=" text-white font-semibold rounded-sm text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]"><Link to="/dev">পরিচিতি</Link></div>
                </div>
            </div>

       

        </div>
    );
};

export default Banner;
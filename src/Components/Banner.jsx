// import Nav from "./Nav";

import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className=" h-[100vh] flex justify-center items-center">
            {/* <Nav /> */}
            <div className="">
                <div className="grid md:grid-cols-1 grid-cols-1 gap-4 p-2">
                    <div className="text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]">
                        <Link to="/user">Search Account</Link>
                    </div>
                    <div className="text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]"><Link to="/admin">Manager Login</Link></div>
                    <div className="text-center border px-10 p-5 uppercase bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]"><Link to="/dev">About us</Link></div>
                </div>
            </div>

       

        </div>
    );
};

export default Banner;

import img from '../assets/Untitled design.png'
import { FaGithub } from "react-icons/fa";
import { HiMiniGlobeAlt } from "react-icons/hi2";



const Dev = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 h-[500px] flex justify-center items-center">
            <div className=" border1 rounded-md p-10 ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[100px]  rounded-full" src={img} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold text-gray-300 uppercase">Rony Ahmed</h1>
                            <p className="text-center text-md font-semibold text-[#ED0B5A]">Font-End Developer</p>
                            <p className="text-center text-sm text-gray-300 px-4">Diploma in Computer science Engineering</p>
                            <p className="text-center text-sm text-gray-500 px-4">Barisal Polytechnic Institute, Barisal</p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a target='_blank' href="https://github.com/Rony-Ahmed6245" ><FaGithub className=" text-2xl rounded-full text-[#ED0B5A]" /></a>
                            <a target="_blank" href="https://personal-portfolio45.netlify.app/"><HiMiniGlobeAlt className=" text-3xl text-[#ED0B5A] " /></a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Dev;
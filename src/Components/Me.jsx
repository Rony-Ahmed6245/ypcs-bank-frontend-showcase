import { FaGithub } from "react-icons/fa6";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import img from  '../assets/Untitled design.png'

const Me = () => {
    return (
        <div>
            <div className=" rounded-md p-10 ">
                <div className=" ">
                    <div className="flex justify-center items-center gap-4 pt-6 ">
                        <img className="w-[100px] md:w-[100px]  rounded-full" src={img} alt="" />
                    </div>
                    <div className="space-y-1 p-3">
                        <h1 className="text-center text-2xl font-bold uppercase">Rony Ahmed</h1>
                        <p className="text-center text-md font-semibold text-[#3B56B9]">Developer</p>
                        <p className="text-center  text-gray-600 px-4">Diploma in Computer Science & Engineering</p>

                    </div>
                    <div className="flex justify-center items-center gap-4 pb-5">


                        <a target='_blank' href="https://github.com/Rony-Ahmed6245" ><FaGithub className=" text-2xl rounded-full text-[#3B56B9]" /></a>
                        <a target="_blank" href="https://rony-ahmed.netlify.app/"><HiMiniGlobeAlt className=" text-3xl text-[#3B56B9] " /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
import { FaGithub } from "react-icons/fa6";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import img from  '../assets/file_00000000aec461f99be6d82da936aeaa.png'

const Me = () => {
    return (
        <div className="py-10" >
            <div className=" rounded-md m-10  ">
                <div className=" border  border-[#FA1C1E] p-4 ">
                    <div className="flex justify-center items-center gap-4  ">
                        <img className="w-full" src={img} alt="" />
                    </div>
                    <div className="space-y-1 p-3">
                        <h1 className="text-center text-2xl font-bold uppercase">Rony Ahmed</h1>
                        <p className="text-center text-md font-semibold text-black">Network Engineer</p>
                        <p className="text-center text-[10px]  text-gray-600 px-4">Diploma in Computer Science & Engineering</p>

                    </div>
                    <div className="flex justify-center items-center gap-4 ">


                        <a target='_blank' href="https://github.com/Rony-Ahmed6245" ><FaGithub className=" text-2xl rounded-full text-[#FA1C1E]" /></a>
                        <a target="_blank" href="https://rony-ahmed.netlify.app/"><HiMiniGlobeAlt className=" text-3xl text-[#FA1C1E] " /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
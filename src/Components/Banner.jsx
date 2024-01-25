
import banner from "../assets/3d-illustration-wallet-with-coins-credit-cards_prev_ui.png"
import img1 from "../assets/411089612_1016361566134727_6716276073552644705_n.jpg"
import img2 from "../assets/184979780_958930997986797_2530290806202001357_n.jpg"
import { FaSquarePhone } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            {/* banner */}
            <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center px-4">
                <div className="md:space-y-4 space-y-2 ">
                    <h1 className="text-[#ED0B5A] text-xl font-bold p-2 mt-5">Welcome to our YPCS Bank</h1>

                    <h1 className="text-3xl md:text-5xl font-semibold text-gray-200 ">
                        YPCS - Youth Progress Cooperative Society
                    </h1>
                    <p className="text-md font-medium text-gray-400 text-justify">YPCS is an interest free banking system for the youth of Sardar Para village. Ashraful Islam is the founder of YPCS.</p>
                    <div className="flex md:justify-start gap-2 justify-between">
                        <button className="border py-2 px-8 rounded text-white bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] hover:bg-[#ED0B5A] text-md font-semibold">14+ Member</button>
                        <button className="border py-2 px-8 rounded text-white bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] hover:bg-[#ED0B5A] text-md font-semibold">24/7 hours support</button>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>


            {/* requirment  */}
            <h1 className="text-[#ED0B5A] font-bold p-2 text-center mt-10">-----Bank policy-----</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

                <ul>
                    <h1 className="text-xl text-gray-200 font-bold underline mb-5">বাংলা:</h1>
                    <li className="text-gray-400 mt-2 font-medium">১. ভর্তি ফি ৩০০ টাকা, যা মূল সঞ্চয়ের সাথে জমা থাকিবে।</li>
                    <li className="text-gray-400 mt-2 font-medium">২. মাসিক সঞ্চয় ২০০ টাকা।</li>

                    <li className="text-gray-400 mt-2 font-medium">৩. ১ থেকে ৭ তারিখের মধ্যে সঞ্চয় জমা দিতে হইবে।</li>
                    <li className="text-gray-400 mt-2 font-medium">৪. নির্দিষ্ট সময়ের মধ্যে দিতে ব্যর্থ হলে প্রতি মাসের জন্য অতিরিক্ত 20 টাকা জরিমানা সহ সঞ্চয় দিতে হবে।</li>
                    <li className="text-gray-400 mt-2 font-medium">৫. সুমিতির প্রাথমিক মেয়াদ তিন বছর। মেয়াদ শেষ হওয়ার আগে কাউকে তার সঞ্চয়কৃত টাকা হস্তান্তর করা হবে না</li>
                    <li className="text-gray-400 mt-2 font-medium">৬. মেয়াদ শেষ হওয়ার আগে কেউ সমিতি থেকে বিচ্ছিন্ন হলে তার ক্ষেত্রেও একই বিধান প্রযোজ্য।</li>
                    <li className="text-gray-400 mt-2 font-medium">৭. কেউ সমিতির স্বার্থ পরিপন্থী কোন কার্যকলাপ যুক্ত থাকলে তার সদস্যপদ বাতিল করা হবে</li>
                    <li className="text-gray-400 mt-2 font-medium">৮.সমিতির বৈঠকে সদস্যদের মতামতের ভিত্তিতে যেকোনো সিদ্ধান্ত গ্রহণ, বর্জন ও পরিবর্তন সংশোধন করা হবে।</li>
                    <li className="text-gray-400 mt-2 font-medium">৯.যেকোনো সিদ্ধান্ত বাস্তবায়নের ক্ষেত্রে কমপক্ষে দুই-তৃতীয়াংশ সদস্যের সম্মতি থাকতে হবে </li>

                </ul>
                <ul>
                    <h1 className="text-xl text-gray-200 font-bold underline mb-5">English:</h1>
                    <li className="text-gray-400 mt-2 font-medium">1. Admission fee of 300 Taka, which will be deposited along with the initial savings.</li>
                    <li className="text-gray-400 mt-2 font-medium">2. Monthly savings of 200 Taka.</li>
                    <li className="text-gray-400 mt-2 font-medium">3. Savings must be deposited by the 7th of each month.</li>
                    <li className="text-gray-400 mt-2 font-medium">4. If unable to deposit within the specified time, an additional penalty of 20 Taka with savings must be paid each month.</li>
                    <li className="text-gray-400 mt-2 font-medium">5. The initial term of Sumit is three years. The deposited amount cannot be withdrawn before the term expires.</li>
                    <li className="text-gray-400 mt-2 font-medium">6. If anyone separates from the society before the term ends, the same rule applies.</li>
                    <li className="text-gray-400 mt-2 font-medium">7. If anyone engages in activities against the interests of the society, their membership will be canceled.</li>
                    <li className="text-gray-400 mt-2 font-medium">8. Decisions, approvals, rejections, and modifications will be made based on the opinions of the members in the society's meetings.</li>
                    <li className="text-gray-400 mt-2 font-medium">9. For any decision to be implemented, at least two-thirds of the members' consent is required.</li>
                </ul>

            </div>
            {/* client section   */}
            <h1 className="text-[#ED0B5A] font-bold p-2 text-center mt-10">-----Those are in charge-----</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-4 px-4 mb-20">
                <div className=" border1  rounded-md ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[200px] rounded-full" src={img1} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold text-gray-300">Asraful Islam</h1>
                            <p className="text-center text-md font-semibold text-[#ED0B5A]">Member of Secretary <span className="text-gray-300">[YPCS]</span> </p>
                            <p className="text-center text-sm text-gray-500 px-4">Bhawal Badre Alam Govt. College, Gazipur</p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a href="tel:+8801776713610" ><FaSquarePhone className="text-[#ED0B5A] text-2xl rounded-full" /></a>
                            <a target="_blank" href="https://www.facebook.com/asrafulislam.6?mibextid=JRoKGi"><FaFacebook className="text-[#ED0B5A] text-2xl " /></a>
                        </div>
                    </div>
                </div>
                <div className=" border1 rounded-md ">
                    <div className=" ">
                        <div className="flex justify-center items-center gap-4 pt-6 ">
                            <img className="w-[100px] md:w-[200px] rounded-full" src={img2} alt="" />
                        </div>
                        <div className="space-y-1 p-3">
                            <h1 className="text-center text-2xl font-bold text-gray-300">Babul Aktar Akib</h1>
                            <p className="text-center text-md font-semibold text-[#ED0B5A]">Manager<span className="text-gray-300">[YPCS]</span> </p>
                            <p className="text-center text-sm text-gray-500 px-4">Bhangura, Pabna</p>
                        </div>
                        <div className="flex justify-center items-center gap-4 pb-5">


                            <a href="tel:+8801770159872" ><FaSquarePhone className=" text-2xl text-[#ED0B5A] rounded-full" /></a>
                            <a target="_blank" href="https://web.facebook.com/babul.babulaktarakib?mibextid=JRoKGi&_rdc=1&_rdr"><FaFacebook className=" text-2xl text-[#ED0B5A]" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <hr />
            <footer className="my-10">
                <p className="text-center">&copy; 2024<span className=" text-[#ED0B5A]"> YPCS</span> | All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Banner;
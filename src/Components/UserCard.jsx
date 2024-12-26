import { Link } from "react-router-dom";
import banner from "../assets/aziz-acharki-boIJluEJEPM-unsplash.jpg"
import { TbCurrencyTaka } from "react-icons/tb";




const UserCard = ({ user }) => {
    const { user_name, img, acc_no } = user || {};



    return (
        <di className=''>

            {/* card */}
            <div className="flex gap-4 max-w-3xl mx-auto  items-center justify-center">
                <div className="w-full rounded-lg border bg-transparent   text-center shadow-lg ">
                    <img className="rounded-t-lg w-full " src={banner} alt="" />
                    <figure className="mx-auto mb-4 border flex -mt-10 h-20 w-20 items-center justify-center rounded-full ">
                        <img className="mx-auto mt-4 mb-4 flex h-16 w-16 items-center justify-center rounded-full " src={img} alt="" />
                    </figure>
                    <h2 className=" text-xl text-gray-400 font-bold uppercase">{user_name}</h2>
                    <h2 className="font-bold text-sm text-gray-500 mb-6">একাউন্ট/ফোন নম্বর: {acc_no}</h2>

                    <div className="flex items-center justify-center">
                     
                        <Link to={`/user/${acc_no}`} className="w-full rounded-b-md bg-[#711DB0] px-4 py-2 mt-4 hover:bg-gray-400 text-white font-medium "><div className="flex justify-center items-center"><TbCurrencyTaka className="text-xl" />আপনার সঞ্চয় দেখুন</div></Link>
                    </div>
                </div>
            </div>

        </di>
    );
};

export default UserCard;
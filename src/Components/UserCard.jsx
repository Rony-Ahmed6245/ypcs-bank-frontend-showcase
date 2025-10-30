import { Link } from "react-router-dom";
import banner from "../assets/online-banking-network-connection-concept-online-payment-icons-virtual-screen-internet-online-banking-pay-concept_35148-11306.avif"
import { TbCurrencyTaka } from "react-icons/tb";




const UserCard = ({ user }) => {
    const { user_name, img, acc_no } = user || {};



    return (
        <di className=''>



            {/* --------------------------  */}
            <div className="border border-[#FA1C1E] m-10 rounded">
                <div className="p-4 ">
                    <div>
                        <figure className="w-full">
                            <img className="  " src={img} alt="" />
                        </figure>
                    </div>
                    <div className="mt-3">
                        <h2 className=" text-[18px] text-black font-bold text-center uppercase">{user_name}</h2>
                        <h2 className="font-bold text-[10px] text-black  text-center mb-6">একাউন্ট নম্বর: {acc_no}</h2>
                    </div>
                </div>
                
                    <Link  to={`/user/${acc_no}`}>
                            <h1 className="bg-[#FA1C1E] py-2 text-[12px] text-center text-white">Amount</h1>
                    </Link>
             
            </div>

        </di>
    );
};

export default UserCard;
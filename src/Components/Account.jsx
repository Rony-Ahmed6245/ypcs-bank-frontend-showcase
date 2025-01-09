import { useLoaderData, useParams } from "react-router-dom";
import Table from "./Table";

const Account = () => {

    const data = useLoaderData();
    // console.log(data);

    const { acc_no } = useParams();
    console.log(acc_no);

    const filterAcc = data.filter((item) => item.acc_no == acc_no);
    console.log(filterAcc);

    // Calculate the total amount and penalty amount separately
    const totalAmount = filterAcc.reduce((sum, item) => sum + parseFloat(item.amount), 0);
    const penaltyAmount = filterAcc.reduce((sum, item) => sum + parseFloat(item.pen_amount), 0);





    return (
        <div className="max-w-7xl mx-auto p-4 my-2 ">

            <div className="md:flex justify-start items-start gap-2">
                <div className="grid grid-cols-2  shadow-lg border text-center my-2 w-full p-4 rounded ">

                    {/* <p className="text-md  uppercase border  text-gray-200  font-bold bg-blue-600  p-5 shadow  rounded">একাউন্ট নম্বর: {acc_no}</p> */}
                    <p className="text-md border-r-2 text-green-600 font-bold"> সর্বমোট জমাকৃত <br /> {totalAmount} টাকা।</p>
                    <p className="text-md  text-red-600 font-bold">সর্বমোট জরিমানা <br /> {penaltyAmount} টাকা।</p>
                </div>
                <div className="md:w-8/12   rounded-md">
                    <h1 className="text-center py-2  rounded-t-md uppercase bg-white text-black"> আপনার প্রতিমাসের সকল রিসিভ </h1>
                    <div className=" mb-10">

                        {/* head */}
                        {/* <thead>
                                <tr className="bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]">
                                    <th className="text-white text-center shadow border uppercase">নং</th>
                                    <th className="text-white text-center shadow border uppercase">জমাকৃত টাকা</th>
                                    <th className="text-white text-center shadow border uppercase">জরিমানা</th>
                                    <th className="text-white text-center shadow border uppercase px-8">মাস</th>
                                    <th className="text-white text-center shadow border uppercase px-8">জমার তারিখ</th>
                                </tr>
                            </thead> */}

                        {/* row 1 */}
                        {
                            filterAcc?.map((item, index) => (
                                <Table key={item._id} item={item} index={index + 1} ></Table>
                            ))
                        }


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Account;

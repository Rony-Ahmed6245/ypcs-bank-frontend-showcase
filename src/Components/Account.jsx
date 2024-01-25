import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Table from "./Table";

const Account = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    const { acc_no } = useParams();
    console.log(acc_no);

    const filterAcc = data.filter((item) => item.acc_no == acc_no);
    console.log(filterAcc);

    // Calculate the total amount and penalty amount separately
    const totalAmount = filterAcc.reduce((sum, item) => sum + parseFloat(item.amount), 0);
    const penaltyAmount = filterAcc.reduce((sum, item) => sum + parseFloat(item.pen_amount), 0);



    const handleGoBack = () => {
        navigate(-1); // Navigate back in the history
    };

    return (
        <div className="max-w-7xl mx-auto p-4 my-5">
            <marquee className="text-gray-300 font-bold py-2 " direction="">Do not return 'Penalty Amount'..!</marquee>
            <div className="md:flex justify-start items-start gap-4">
                <div className="md:w-4/12    flex-col rounded gap-4 mb-5 md:mb-0 md:flex justify-center  ">
                    <p className="text-md bg-gradient-to-r from-[#711DB0] uppercase to-[#ED0B5A]  text-gray-200  font-bold  p-5 shadow  rounded">Account Number: {acc_no}</p>
                    <p className="text-md bg-gradient-to-r from-[#711DB0] uppercase to-[#ED0B5A] text-gray-200 my-2 font-bold p-5 shadow rounded">Total Main Amount: {totalAmount}.00TK</p>
                    <p className="text-md  bg-gradient-to-r from-[#711DB0] uppercase to-[#ED0B5A]  text-gray-200  font-bold p-5  shadow rounded">Total Penalty Amount: {penaltyAmount}.00TK</p>
                </div>
                <div className="md:w-8/12  text-white rounded-md">
                    <h1 className="text-center py-5 bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] rounded-t-md uppercase text-white">Deposit History</h1>
                    <div className="overflow-x-auto ">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr className="bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]">
                                    <th className="text-white text-center shadow border uppercase">serial NO</th>
                                    <th className="text-white text-center shadow border uppercase">Deposit Amount</th>
                                    <th className="text-white text-center shadow border uppercase">Penalty Amount</th>
                                    <th className="text-white text-center shadow border uppercase px-8">Month</th>
                                    <th className="text-white text-center shadow border uppercase px-8">Deposit Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    filterAcc?.map((item, index) => (
                                        <Table key={item._id} item={item} index={index + 1} ></Table>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10">
                <button className="bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] py-1 px-2 rounded-md" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default Account;

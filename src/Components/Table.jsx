

const Table = ({ item, index }) => {
    console.log(item);
    return (
        <div>
            {/* <tr className=" shadow text-gray-200 border">
                <td className="shadow  border text-center">{index}</td>
                <td className="shadow  border text-center">{item.amount}.00 TK</td>
                <td className="shadow  border text-center">{item.pen_amount}.00 TK</td>
                <td className="shadow  border text-center">{item.exdate}</td>
                <td className="shadow  border text-center">{item.date}</td>
            </tr> */}

            {/* --------------  */}
            <div className="flex justify-center items-center py-2 ">
                <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl  border border-gray-200">
                    {/* Header Section */}
                    <div className="flex justify-between text-white items-start border-b rounded-t-lg pb-2 p-4 mb-2 bg-[#3B56B9]">
                        <div className="space-y-1">
                            <h1 className="text-base font-bold text-white">ম্যানি রিসিভ</h1>
                            <p className="text-xs ">রিসিভ নং: 0000{index}</p>
                        </div>
                        <div className="text-right space-y-1">
                            <h2 className="text-sm font-semibold ">যুব অগ্রযাত্রা সমবায় সমিতি</h2>
                            <p className="text-xs ">সরদারপাড়া, ভাঙ্গুড়া-পাবনা।</p>
                            <p className="text-xs ">ফোন: ০১৭০৯-১৩২৪৭৯</p>
                        </div>
                    </div>

                    {/* Receipt Details */}
                    <div className="space-y-4 text-gray-600 mb-4 p-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm ">একাউন্ট নম্বর:</p>
                            <p className="text-sm  font-bold">{item.acc_no}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm ">মাস:</p>
                            <p className="text-sm font-semibold ">{item.exdate}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm ">টাকা জমাদানের তারিখ:</p>
                            <p className="text-sm font-semibold ">{item.date}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm ">জমাকৃত টাকার পরিমাণ:</p>
                            <p className="text-sm font-bold text-green-600">{item.amount} টাকা</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm ">জরিমানা  টাকার পরিমাণ:</p>
                            <p className="text-sm font-semibold text-red-600">{item.pen_amount} টাকা</p>
                        </div>
                    </div>



                    {/* Footer Section */}


                </div>
            </div>
        </div>


    );
};

export default Table;
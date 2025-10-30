import { useLoaderData, useParams } from "react-router-dom";
import Table from "./Table";

const Account = () => {
  const data = useLoaderData();
  const { acc_no } = useParams();

  // Filter account data
  const filterAcc = data.filter((item) => item.acc_no == acc_no);
  console.log("Filtered Data:", filterAcc);

  // exdate অনুযায়ী sort (Month-Year)
  const sortedAcc = [...filterAcc].sort((a, b) => {
    // "August-25" থেকে month এবং year আলাদা করা
    const [monthA, yearA] = a.exdate.split("-");
    const [monthB, yearB] = b.exdate.split("-");

    // JS Date বানানো: day=1
    const dateA = new Date(`1 ${monthA} 20${yearA}`);
    const dateB = new Date(`1 ${monthB} 20${yearB}`);

    return dateA - dateB;
  });

  console.log("Sorted Data:", sortedAcc);

  // Calculate totals
  const totalAmount = sortedAcc.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  const penaltyAmount = sortedAcc.reduce((sum, item) => sum + parseFloat(item.pen_amount), 0);

  return (
    <div className="max-w-3xl mx-auto p-4 my-2">
      <p className="text-[14px] text-center uppercase border text-gray-200 font-bold bg-[#FA1C1E] p-5 shadow rounded">
        একাউন্ট নম্বর: {acc_no}
      </p>

      <div className="justify-start items-start gap-2">
        <div className="grid grid-cols-2 border border-[#FA1C1E] text-center my-2 w-full p-4 rounded">
          <p className="text-[12px] border-r-2 border-r-black font-bold">
             Total Balance: <span className="text-green-600 font-bold">{totalAmount}</span> ‍TK
          </p>
          <p className="text-[12px] font-bold">
           Total Fine <span className="text-red-600 font-bold">{penaltyAmount}</span> TK
          </p>
        </div>

        <div className="rounded-md">
          <h1 className="text-center text-[13px] py-2 rounded-t-md uppercase bg-white text-black">
            আপনার প্রতিমাসের সকল রিসিভ
          </h1>

          <div className="mb-10">
            {sortedAcc?.map((item, index) => (
              <Table key={item._id} item={item} index={index + 1}></Table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

import { useLoaderData, useParams } from "react-router-dom";
import Table from "./Table";

const Account = () => {
  const data = useLoaderData() || [];
  const { acc_no } = useParams();

  // Filter account data safely
  const filterAcc = data.filter((item) => item.acc_no == acc_no);

  // Sort by exdate (Month-Year)
  const sortedAcc = [...filterAcc].sort((a, b) => {
    if (!a.exdate || !b.exdate) return 0;

    const [monthA, yearA] = a.exdate.split("-");
    const [monthB, yearB] = b.exdate.split("-");

    const dateA = new Date(`1 ${monthA} 20${yearA}`);
    const dateB = new Date(`1 ${monthB} 20${yearB}`);

    return dateA - dateB;
  });

  // Calculate totals safely
  const totalAmount = sortedAcc.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );
  const penaltyAmount = sortedAcc.reduce(
    (sum, item) => sum + (parseFloat(item.pen_amount) || 0),
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
      {/* Top Banner Card - Deep Slate/Navy Blue */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md text-center mb-6">
        <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
          অ্যাকাউন্ট সারসংক্ষেপ
        </p>
        <h2 className="text-xl sm:text-2xl text-white font-extrabold tracking-wide">
          একাউন্ট নম্বর: <span className="text-indigo-300 underline decoration-indigo-400 decoration-wavy underline-offset-4">{acc_no}</span>
        </h2>
      </div>

      {/* Metric Cards - Green & Amber Accent */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Total Balance Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-all text-center">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">
            Total Balance
          </p>
          <p className="text-xl sm:text-2xl font-black text-emerald-600">
            ৳ {totalAmount.toLocaleString()}
          </p>
        </div>

        {/* Total Fine Card - Amber/Warm Orange (Replaced Red) */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-all text-center">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">
            Total Fine
          </p>
          <p className="text-xl sm:text-2xl font-black text-amber-600">
            ৳ {penaltyAmount.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Section Header - Indigo/Navy Accent */}
        <div className="bg-indigo-900 px-6 py-4 border-b border-indigo-800">
          <h1 className="text-center text-sm font-bold uppercase tracking-wider text-indigo-100">
            আপনার প্রতিমাসের সকল রিসিভ
          </h1>
        </div>

        {/* Transactions List */}
        <div className="p-4 sm:p-6 space-y-3">
          {sortedAcc.length > 0 ? (
            sortedAcc.map((item, index) => (
              <Table key={item._id || index} item={item} index={index + 1} />
            ))
          ) : (
            <p className="text-center text-slate-400 py-8 text-sm">
              কোনো রিসিভ রেকর্ড পাওয়া যায়নি।
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
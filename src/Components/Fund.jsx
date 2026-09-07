import { useLoaderData } from "react-router-dom";

const Fund = () => {
  const data = useLoaderData() || [];

  // Total Calculation
  const totalAmount = data.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );
  const totalPenalty = data.reduce(
    (sum, item) => sum + (parseFloat(item.pen_amount) || 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 my-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm border border-slate-200">
      {/* Top Banner Card with Total Calculations */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-md mb-8">
        <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-3 text-center sm:text-left">
          ফান্ড ও জরিমানা সামারি
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center sm:text-left">
            <p className="text-xs text-indigo-200 font-semibold mb-1">মোট ফান্ড জমা</p>
            <p className="text-2xl font-black text-emerald-400">
              {totalAmount.toLocaleString("bn-BD", { minimumFractionDigits: 2 })} <span className="text-xs text-emerald-300">টাকা</span>
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center sm:text-left">
            <p className="text-xs text-indigo-200 font-semibold mb-1">মোট জরিমানা সংগ্রহ</p>
            <p className="text-2xl font-black text-amber-400">
              {totalPenalty.toLocaleString("bn-BD", { minimumFractionDigits: 2 })} <span className="text-xs text-amber-300">টাকা</span>
            </p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-indigo-900 px-6 py-4 border-b border-indigo-800 flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-100">
            সকল লেনদেনের তালিকা
          </h2>
          <span className="text-xs bg-indigo-800 text-indigo-200 px-3 py-1 rounded-full font-semibold">
            মোট: {data.length} টি
          </span>
        </div>

        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-700 uppercase text-xs font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 text-center">নং</th>
                  <th className="py-3.5 px-4 text-center">একাউন্ট নম্বর</th>
                  <th className="py-3.5 px-4 text-right">জমাকৃত টাকা</th>
                  <th className="py-3.5 px-4 text-right">জরিমানা</th>
                  <th className="py-3.5 px-4 text-center">মাস</th>
                  <th className="py-3.5 px-4 text-center">তারিখ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.map((item, index) => (
                  <tr
                    key={item._id || index}
                    className="hover:bg-indigo-50/50 transition-colors duration-150"
                  >
                    <td className="py-3 px-4 text-center font-medium text-slate-500">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 font-bold text-slate-700 text-xs">
                        {String(item.acc_no).padStart(2, "0")}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-600">
                      {Number(item.amount).toFixed(2)} Tk
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-amber-600">
                      {Number(item.pen_amount).toFixed(2)} Tk
                    </td>
                    <td className="py-3 px-4 text-center text-xs font-semibold text-indigo-900">
                      {item.exdate}
                    </td>
                    <td className="py-3 px-4 text-center text-xs text-slate-500">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-slate-400 py-12 text-sm font-medium">
            কোনো লেনদেনের রেকর্ড পাওয়া যায়নি।
          </p>
        )}
      </div>
    </div>
  );
};

export default Fund;
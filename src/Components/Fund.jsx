import { useLoaderData } from "react-router-dom";

const Fund = () => {
  const data = useLoaderData();

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
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold">মোট ফান্ড:</p>
          <p className="text-3xl font-bold">{totalAmount.toFixed(2)} টাকা</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold">মোট জরিমানা:</p>
          <p className="text-3xl font-bold">{totalPenalty.toFixed(2)} টাকা</p>
        </div>
      </div>

      {/* Table Section */}
      <h2 className="text-2xl font-bold text-center mb-4">All Payment Transition</h2>

      {data.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 border">নং</th>
                <th className="p-2 border">একাউন্ট নম্বর</th>
                <th className="p-2 border">জমাকৃত টাকা</th>
                <th className="p-2 border">জরিমানা</th>
                <th className="p-2 border">মাস</th>
                <th className="p-2 border">তারিখ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{item.acc_no}</td>
                  <td className="p-2 border">{item.amount}</td>
                  <td className="p-2 border">{item.pen_amount}</td>
                  <td className="p-2 border">{item.exdate}</td>
                  <td className="p-2 border">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-red-500">No fund data found.</p>
      )}
    </div>
  );
};

export default Fund;

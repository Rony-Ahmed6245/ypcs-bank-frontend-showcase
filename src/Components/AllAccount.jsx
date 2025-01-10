import { useEffect, useState } from "react";

const AllAccount = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    console.log(users);

    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-white py-2 top-0 bg-blue-600"> মোট সদস্য সংখ্যা: {users.length} জন।</h1>
            </div>
            <div className="mb-14">
                {users?.map((item) => (
                    <div className="py-3 px-2 max-w-[400px] mx-auto" key={item.id}>
                        <div className="border  border-b-2 border-b-indigo-600 rounded  p-4 flex justify-between items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0">
                                <img
                                    className="w-16 max-h-16   rounded"
                                    src={item.img}
                                    alt="User Avatar"
                                />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-gray-800">{item.user_name}</h2>
                                <p className="text-sm text-gray-500">একাউন্ট নম্বর: {item.acc_no}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAccount;

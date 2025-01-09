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
                    <div className="py-3" key={item.id}>
                        <div className="max-w-xs mx-auto field bg-white rounded-lg shadow p-6 flex justify-between items-center space-x-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0">
                                <img
                                    className="w-16 max-h-16 rounded"
                                    src={item.img}
                                    alt="User Avatar"
                                />
                            </div>

                            <div>
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

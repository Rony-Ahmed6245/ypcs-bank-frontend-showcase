import { useEffect, useState } from "react";

const AllAccount = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                // Filter and sort by acc_no
                const sortedUsers = data
                    .filter(user => user.acc_no && !isNaN(user.acc_no))
                    .sort((a, b) => Number(a.acc_no) - Number(b.acc_no));
                
                setUsers(sortedUsers); 
            });
    }, []);

    return (
        <div>
            <h1 className="text-center font-bold text-white py-2 bg-blue-600">
                মোট সদস্য সংখ্যা: {users.length} জন।
            </h1>

            <div className="mb-14">
                {users.map((user, index) => (
                    <div className="py-3 px-2 max-w-[400px] mx-auto" key={user.id || user.acc_no}>
                        <div className="border border-indigo-600 rounded p-4 flex gap-4 items-center bg-white shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                                <img
                                    className=" rounded-full "
                                    src={user.img}
                                    alt={user.user_name}
                                />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">
                                   {user.user_name}
                                </h2>
                                <p className=" text-gray-700 mt-2">
                                    একাউন্ট নম্বর: <span className="text-xl rounded-full p-1 border font-bold text-green-600">{String(user.acc_no).padStart(2, '0')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAccount;

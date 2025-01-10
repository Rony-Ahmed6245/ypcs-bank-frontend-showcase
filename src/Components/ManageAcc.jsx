import { useEffect, useState } from "react";
import UserManageTable from "./UserManageTable";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const ManageAcc = () => {
    const [users, setUsers] = useState([]); // State for all users
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users

    const data = useLoaderData([]); // Fetch data using loader (possibly a list of transactions)

    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data); // Set all users to state
                setFilteredUsers(data); // Initially show all users
            });
    }, []);

    // Update filtered users based on the search term
    useEffect(() => {
        if (searchTerm === "") {
            // If no search term, show all users
            setFilteredUsers(users);
        } else {
            // Filter users based on the search term (matching 'exdate' field)
            const filterPay = data.filter((item) => item.exdate === searchTerm);
            const userFilter = users.filter((user) =>
                filterPay.some((item) => item.acc_no === user.acc_no)
            );
            setFilteredUsers(userFilter);
        }
    }, [searchTerm, users, data]); // This effect runs when searchTerm or users change

    const handleDelete = async (accountId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "User Bank Account delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Account!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(
                        `https://bank-server-theta.vercel.app/v1/userBankAccounts/${accountId}`,
                        {
                            method: "DELETE",
                        }
                    );

                    if (response.ok) {
                        setUsers((prevUsers) =>
                            prevUsers.filter((user) => user._id !== accountId)
                        );
                        setFilteredUsers((prevFiltered) =>
                            prevFiltered.filter((user) => user._id !== accountId)
                        );
                        Swal.fire({
                            title: "Deleted!",
                            text: "User bank account has been deleted.",
                            icon: "success",
                        });
                    } else {
                        console.error(`Error deleting account with ID: ${accountId}`);
                    }
                } catch (error) {
                    console.error("Error deleting account:", error);
                }
            }
        });
    };

    return (
        <div className="overflow-x-auto max-w-5xl mx-auto my-5">
            {/* Search Box */}
            <div className="mb-4 flex items-center justify-between">
               
                <input
                    type="text"
                    id="searchBox"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="December-24)"
                    className=" p-2 rounded shadow-sm w-full border-b-blue-700 border-2 mx-2"
                />
            </div>


            {/* Table */}
            <table className="table">
                {/* Table Head */}
                {/* <thead>
                    <tr className="bg-[#4E70EC]">
                        <th className="text-white text-center shadow border uppercase">নং</th>
                        <th className="text-white text-center shadow border uppercase">ছবি</th>
                        <th className="text-white text-center shadow border uppercase">সদস্যের নাম</th>
                        <th className="text-white text-center shadow border uppercase">একাউন্ট নম্বর</th>
                        <th className="text-white text-center shadow border uppercase">ডিলিট</th>
                    </tr>
                </thead> */}
                <div className="my-2">
                    {users.map((item, index) => {
                        // Check if the account is part of the filtered users
                        const isFiltered = filteredUsers.some(
                            (user) => user.acc_no === item.acc_no
                        );
                        return (
                            <div
                                key={item._id}
                                className={` my-5 border p-4 mx-2 rounded  ${
                                    !isFiltered ? "bg-red-200 rounded " : 
                                    "" // Highlight non-matching accounts in red
                                }`}
                            >
                                <UserManageTable
                                    key={item._id}
                                    item={item}
                                    index={index + 1}
                                    handleDelete={handleDelete}
                                />
                            </div>
                        );
                    })}
                </div>
            </table>
        </div>
    );
};

export default ManageAcc;

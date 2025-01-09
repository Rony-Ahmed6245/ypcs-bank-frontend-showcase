
import { useEffect, useState } from "react";
import UserManageTable from "./UserManageTable";
import Swal from "sweetalert2";



const ManageAcc = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://bank-server-theta.vercel.app/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
    }, []);
    console.log(users);



    const handleDelete = async (accountId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "User Bannk Account delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Account!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`https://bank-server-theta.vercel.app/v1/userBankAccounts/${accountId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== accountId));
                        Swal.fire({
                            title: "Deleted!",
                            text: "User bank account has been deleted.",
                            icon: "success"
                        });
                    } else {
                        console.error(`Error deleting account with ID: ${accountId}`);
                    }
                } catch (error) {
                    console.error('Error deleting account:', error);
                }
            }
        });


    };

    return (
        <div className="overflow-x-auto max-w-5xl mx-auto my-5">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className="bg-[#4E70EC]">
                        <th className="text-white text-center shadow border uppercase">নং</th>
                        <th className="text-white text-center shadow border uppercase">ছবি</th>
                        <th className="text-white text-center shadow border uppercase">সদস্যের নাম</th>
                        <th className="text-white text-center shadow border uppercase">একাউন্ট নম্বর</th>
                        <th className="text-white text-center shadow border uppercase">ডিলিট</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map((item, index) => (
                            <UserManageTable key={item._id} item={item} index={index + 1} handleDelete={handleDelete} ></UserManageTable>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAcc;
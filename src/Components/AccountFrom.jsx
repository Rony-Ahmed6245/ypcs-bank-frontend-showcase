import { useState } from "react";
import Swal from "sweetalert2";

const AccountForm = () => {
    const [errorMessage, setErrorMessage] = useState("");

    // Function to validate Bangla input
    const validateBangla = (text) => {
        const banglaRegex = /^[\u0980-\u09FF\s]+$/; // Bangla characters and spaces
        return banglaRegex.test(text);
    };

    // Function to validate English input (2 digits for acc_no)
    const validateAccountNumber = (text) => {
        const accountRegex = /^[0-9]{2}$/; // Exactly 2 digits
        return accountRegex.test(text);
    };

    const handleUserData = async (e) => {
        e.preventDefault();

        const user_name = e.target.userName.value.trim();
        const acc_no = e.target.acc_no.value.trim();
        const image = e.target.img.files[0]; // Use files[0] to get the selected file

        // Validation
        if (!user_name) {
            Swal.fire("নাম অবশ্যই প্রদান করতে হবে।");
            return;
        }

        if (!validateBangla(user_name)) {
            Swal.fire("নাম শুধুমাত্র বাংলায় লিখুন।");
            return;
        }

        if (!acc_no) {
            Swal.fire("একাউন্ট নম্বর অবশ্যই প্রদান করতে হবে।");
            return;
        }

        if (!validateAccountNumber(acc_no)) {
            Swal.fire("একাউন্ট নম্বর অবশ্যই ২ সংখ্যার হতে হবে এবং ইংরেজিতে লিখুন।");
            return;
        }

        if (!image) {
            Swal.fire("একটি ছবি নির্বাচন করুন।");
            return;
        }

        // Create FormData object to append the image
        const formData = new FormData();
        formData.append("image", image);

        try {
            // Upload image to ImgBB
            const imgbbResponse = await fetch(
                "https://api.imgbb.com/1/upload?key=fdcd6ed14a8ccf736515825c22b2b1d1",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!imgbbResponse.ok) {
                throw new Error("Error uploading image to ImgBB");
            }

            const imgbbData = await imgbbResponse.json();
            const imgUrl = imgbbData.data.url;

            // Save user data to your server along with the ImgBB image URL
            const userFormData = { user_name, acc_no, img: imgUrl };
            const response = await fetch(
                "https://bank-server-theta.vercel.app/v1/userBankAccount",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userFormData),
                }
            );

            if (response.ok) {
                Swal.fire("নতুন একাউন্ট সফলভাবে তৈরি হয়েছে!");
                setErrorMessage(""); // Clear any error messages
                e.target.reset(); // Reset the form
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || "একাউন্ট তৈরি করতে সমস্যা হয়েছে।");
            }
        } catch (error) {
            console.error("Error creating account:", error);
            setErrorMessage("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center px-4 my-10">
                <div className=" text-black rounded-md p-4">
                    <h1 className="text-2xl uppercase text-center mb-6">নতুন একাউন্ট করুন</h1>

                    <form onSubmit={handleUserData} className=" space-y-3">
                        <div className="my-2">
                            <label>নাম দিন (বাংলায়)</label>
                            <input
                                type="text"
                                name="userName"
                                required
                                placeholder="নাম লিখুন"
                                className="field w-full shadow-sm"
                            />
                        </div>
                        <div className="my-2">
                            <label>একাউন্ট নম্বর দিন (ইংরেজিতে)</label>
                            <input
                                name="acc_no"
                                required
                                placeholder="00"
                                type="text"
                                 className="field w-full shadow-sm"
                            />
                        </div>
                        <div className="">
                            <label>ছবি দিন</label>
                            <input name="img" required type="file"
                             className="field w-full shadow-sm"
                            />
                            
                        </div>

                        <button
                            type="submit"
                            className="w-full border py-2 rounded bg-blue-600 text-white mt-4"
                        >
                            খুলুন
                        </button>
                    </form>

                    {errorMessage && (
                        <p className="error-message text-red-500">{errorMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountForm;

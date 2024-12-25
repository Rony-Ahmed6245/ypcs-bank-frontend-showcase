import { useState } from "react";
import Swal from "sweetalert2";

const AccountForm = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserData = async (e) => {
        e.preventDefault();

        const user_name = e.target.userName.value;
        const acc_no = e.target.acc_no.value;
        const image = e.target.img.files[0]; // Use files[0] to get the selected file

        // Create FormData object to append the image
        const formData = new FormData();
        formData.append('image', image);

        try {
            // Upload image to ImgBB
            const imgbbResponse = await fetch('https://api.imgbb.com/1/upload?key=fdcd6ed14a8ccf736515825c22b2b1d1', {
                method: "POST",
                body: formData,
            });

            if (!imgbbResponse.ok) {
                throw new Error('Error uploading image to ImgBB');
            }

            const imgbbData = await imgbbResponse.json();
            const imgUrl = imgbbData.data.url;

            // Save user data to your server along with the ImgBB image URL
            const userFormData = { user_name, acc_no, img: imgUrl };
            const response = await fetch('https://bank-server-theta.vercel.app/v1/userBankAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            if (response.ok) {
                Swal.fire("New Bank Account Created Successfully!");
                // Optionally, you can reset the form or navigate to another page
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error creating account');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            setErrorMessage('Something went wrong. Please try again.');
        }

        e.target.reset();
    };

    return (
        <div>
            <div className="flex  justify-center items-center px-4 my-10 ">
                <div className=" shadow form-container bg-gradient-to-r from-[#711DB0] to-[#ED0B5A]  rounded-md p-4">
                    <h1 className="card__title uppercase text-center">নতুন একাউন্ট করুন</h1>

                    <form onSubmit={handleUserData} className="form  space-y-3">
                        <div className="input-group">
                            <label >নাম দিন (বাংলায়) </label>
                            <input type="text" name="userName" required placeholder="  " />
                        </div>
                        <div className="input-group">
                            <label >একাউন্ট নম্বর দিন (বাংলায়) </label>
                            <input name="acc_no"  required placeholder="০০ ০০" type="text" />
                        </div>
                        <div className="input-group">
                            <label >ছবি দিন</label>
                            <input name="img" required type="file" />
                        </div>

                     
                        <button type="submit" className="w-full border py-2 rounded bg-[#711DB0] hover:bg-[#ED0B5A] mt-4">
                            খুলুন
                        </button>
                    </form>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default AccountForm;

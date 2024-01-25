import Swal from "sweetalert2";

const DpFrom = () => {
    const handleDepositData = async (e) => {
        e.preventDefault();

        const acc_no = e.target.acc_no.value;
        const amount = e.target.amount.value;
        const pen_amount = e.target.pen_amount.value;
        const exdate = formatDate1(e.target.exdate.value); // Format the expiration date
        const date = formatDate(e.target.date.value); // Format the date

        const depositFormData = { acc_no, amount, pen_amount, date, exdate };
        console.log(depositFormData);

        try {
            // Assuming your server is running on http://localhost:5173
            const response = await fetch('https://bank-server-theta.vercel.app/v1/userAmounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(depositFormData),
            });

            if (response.ok) {
                Swal.fire("Amount Added Successfully!");
                // Optionally, you can reset the form or navigate to another page
            }
        } catch (error) {
            console.error('Error creating account:', error);
        }
        e.target.reset();
    };

    // Function to format date as dd/mm/yy
   // Function to format date as mm text/yy
// Function to format date as dd/mm/yy
const formatDate = (inputDate) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = monthNames[dateObject.getMonth()]; // Get the month name
    const year = dateObject.getFullYear().toString().slice(-2);
    
    return `${day}th-${month}-${year}`;
  };
  
  
// Function to format date as mm/yy
// Function to format date as mm/yy text
const formatDate1 = (inputDate) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const dateObject = new Date(inputDate);
    const month = monthNames[dateObject.getMonth()]; // Get the month name
    const year = dateObject.getFullYear().toString().slice(-2);
    
    return `${month}-${year}`;
  };
  
  
    return (
        <div>
            <div className="flex justify-center items-center my-20">
                <div className=" shadow bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] rounded-md p-7">
                    <h1 className="card__title text-center uppercase">Deposit</h1>
                    <form onSubmit={handleDepositData} className="card__form">
                        <div className="input-group">
                            <label >Account Number</label>
                            <input name="acc_no" pattern="[0-9]{8,}" required placeholder="00 00 00 00" type="text" />
                        </div>
                        <div className="flex gap-2 justify-center">
                            <div className="input-group">
                                <label >Main Amount</label>
                                <input name="amount" required defaultValue={200} type="number" />
                            </div>
                            <div className="input-group">
                                <label >Penalty Amount</label>
                                <input name="pen_amount" required placeholder="" defaultValue={0} type="text" />
                            </div>
                        </div>
                       
                            <div className="input-group">
                                <label >Month</label>
                                <input name="exdate" required type="date"  id="" />
                            </div>
                            <div className="input-group">
                                <label >Deposit Date</label>
                                <input name="date" required type="date" id="" />
                            </div>
                      



                        <button className="w-full text-white border py-2 rounded bg-[#711DB0] hover:bg-[#ED0B5A]">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DpFrom;

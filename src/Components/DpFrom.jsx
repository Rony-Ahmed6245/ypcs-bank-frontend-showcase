import Swal from "sweetalert2";

const DpFrom = () => {
  const handleDepositData = async (e) => {
    e.preventDefault();

    const acc_no = e.target.acc_no.value.trim();
    const amount = e.target.amount.value.trim();
    const pen_amount = e.target.pen_amount.value.trim();
    const exdate = formatDate1(e.target.exdate.value); // Format expiration date
    const date = formatDate(e.target.date.value); // Format deposit date

    // Validation: Account number (exactly 11 digits)
    if (!validateAccountNumber(acc_no)) {
      Swal.fire("একাউন্ট নম্বর অবশ্যই ১১ সংখ্যার হতে হবে এবং ইংরেজি সংখ্যায় লিখুন।");
      return;
    }

    // Validation: Amount and Penalty (numeric only)
    if (!validateNumeric(amount) || !validateNumeric(pen_amount)) {
      Swal.fire("জমাকৃত টাকা এবং জরিমানা অবশ্যই ইংরেজি সংখ্যায় লিখুন।");
      return;
    }

    // Validation: Dates
    if (!exdate || !date) {
      Swal.fire("মাস এবং জমার তারিখ অবশ্যই প্রদান করতে হবে।");
      return;
    }

    const depositFormData = { acc_no, amount, pen_amount, date, exdate };
    console.log(depositFormData);

    try {
      const response = await fetch("https://bank-server-theta.vercel.app/v1/userAmounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(depositFormData),
      });

      if (response.ok) {
        Swal.fire("টাকা সফলভাবে জমা হয়েছে!");
        e.target.reset(); // Reset form after successful submission
      } else {
        const errorData = await response.json();
        Swal.fire(errorData.message || "জমা করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Error creating deposit record:", error);
      Swal.fire("কিছু সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।");
    }
  };

  // Function to validate 11-digit account number
  const validateAccountNumber = (text) => /^[0-9]{11}$/.test(text);

  // Function to validate numeric values
  const validateNumeric = (value) => /^[0-9]+$/.test(value);

  // Function to format date as dd/mm/yy
  const formatDate = (inputDate) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = monthNames[dateObject.getMonth()];
    const year = dateObject.getFullYear().toString().slice(-2);

    return `${day}th-${month}-${year}`;
  };

  // Function to format date as mm/yy
  const formatDate1 = (inputDate) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateObject = new Date(inputDate);
    const month = monthNames[dateObject.getMonth()];
    const year = dateObject.getFullYear().toString().slice(-2);

    return `${month}-${year}`;
  };

  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="shadow bg-gradient-to-r from-[#711DB0] to-[#ED0B5A] rounded-md p-7">
          <h1 className="card__title text-center uppercase">টাকা জমা করুন</h1>
          <form onSubmit={handleDepositData} className="card__form">
            <div className="input-group">
              <label>একাউন্ট/ফোন নম্বর (১১ সংখ্যার ইংরেজি)</label>
              <input name="acc_no" required placeholder="017 00 00 00 00" type="text" />
            </div>
            <div className="flex gap-2 justify-center">
              <div className="input-group">
                <label>জমাকৃত টাকা (ইংরেজিতে)</label>
                <input name="amount" required defaultValue={250} type="number" />
              </div>
              <div className="input-group">
                <label>জরিমানা (ইংরেজিতে)</label>
                <input name="pen_amount" required placeholder="0" defaultValue={0} type="number" />
              </div>
            </div>
            <div className="input-group">
              <label>মাস</label>
              <input name="exdate" required type="date" id="" />
            </div>
            <div className="input-group">
              <label>জমার তারিখ</label>
              <input name="date" required type="date" id="" />
            </div>
            <button className="w-full text-white border py-2 rounded bg-[#711DB0] hover:bg-[#ED0B5A]">
              জমা করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DpFrom;

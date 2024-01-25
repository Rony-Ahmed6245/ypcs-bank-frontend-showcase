

const Guide = () => {
    return (
        <div className="max-w-5xl px-2 mx-auto my-5">
            <h1 className="mt-5 font-semibold">ব্যাংক অ্যাকাউন্ট ম্যানেজমেন্ট গাইড:</h1>
            <ol>
                <li> <span className="font-semibold">ধাপ ১:</span> Dashboard এ প্রবেশ করুন ।</li>
                <li> <span className="font-semibold">ধাপ ২:</span> নতুন একটি অ্যাকাউন্ট তৈরি করার জন্য New Account বাটনটিতে এ ক্লিক করুন।</li>
                <li> <span className="font-semibold">ধাপ ৩:</span> অ্যাকাউন্ট তৈরি করার জন্য সঠিকভাবে তথ্য দিয়ে ফরমটি ফিলাপ করুন এবং Create বাটনে ক্লিক করুন।</li>
                <li> <span className="font-semibold">ধাপ ৪:</span> একাউন্টটি তৈরি হয়ে গেলে Manage Account বাটনটিতে ক্লিক করলে একাউন্টটি দেখা যাবে ।</li>
                <li> <span className="font-semibold">ধাপ ৫:</span> প্রয়োজন অনুসারে ম্যানেজ একাউন্ট থেকে একাউন্ট ডিলিট করা যাবে এবং অ্যাকাউন্ট নম্বর কপি করা যাবে।</li>
                <li> <span className="font-semibold">ধাপ ৬:</span> Deposit বাটনটিতে ক্লিক করে প্রয়োজন অনুযায়ী ডিপোজিট করা যাবে।</li>
                <li> <span className="font-semibold">ধাপ ৭:</span> Deposit History বাটনটিতে ক্লিক করে সকল ডিপোজিট হিস্টোরি দেখা যাবে। এবং প্রয়োজন অনুযায়ী ডিপোজিট হিস্টরি ডিলিট করা যাবে।</li>

            </ol>
            <h1 className="mt-5 font-semibold"> ইউনিক একাউন্ট বজায় রাখার জন্য নিচে কিছু অ্যাকাউন্ট নম্বর ইনপুট দেওয়া হলো যেগুলো ইউনিক একাউন্ট তৈরি করতে সাহায্য করবে</h1>
            <table className="table1">
                <thead>
                    <tr>
                        <th className="sel">Serial</th>
                        <th className="sel">8-Digit Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="sel">1</td> <td className="sel">23456789</td></tr>
                    <tr><td className="sel">2</td> <td className="sel">98765432</td></tr>
                    <tr><td className="sel">3</td> <td className="sel">12245638</td></tr>
                    <tr><td className="sel">4</td> <td className="sel">87654321</td></tr>
                    <tr><td className="sel">5</td> <td className="sel">34567890</td></tr>
                    <tr><td className="sel">6</td> <td className="sel">89012345</td></tr>
                    <tr><td className="sel">7</td> <td className="sel">56789012</td></tr>
                    <tr><td className="sel">8</td> <td className="sel">21098765</td></tr>
                    <tr><td className="sel">9</td> <td className="sel">43210987</td></tr>
                    <tr><td className="sel">10</td><td className="sel">65432109</td></tr>
                    <tr><td className="sel">11</td><td className="sel">10987654</td></tr>
                    <tr><td className="sel">12</td><td className="sel">54321098</td></tr>
                    <tr><td className="sel">13</td><td className="sel">67890123</td></tr>
                    <tr><td className="sel">15</td><td className="sel">12345098</td></tr>
                    <tr><td className="sel">16</td><td className="sel">87650921</td></tr>
                    <tr><td className="sel">17</td><td className="sel">87654301</td></tr>
                    <tr><td className="sel">18</td><td className="sel">76543210</td></tr>
                    <tr><td className="sel">19</td><td className="sel">90817263</td></tr>
                    <tr><td className="sel">20</td><td className="sel">45678901</td></tr>
                    <tr><td className="sel">21</td><td className="sel">10293847</td></tr>
                    <tr><td className="sel">27</td><td className="sel">12345578</td></tr>
                    
                 
                   
                </tbody>
            </table>
        </div>
    );
};

export default Guide;
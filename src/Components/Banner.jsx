import { Link } from "react-router-dom";
import { FaUserClock, FaBullhorn } from "react-icons/fa6";
import { 
  MdAccountBalanceWallet, 
  MdAdminPanelSettings, 
  MdOutlineAdminPanelSettings, 
  MdOutlineDeviceHub 
} from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col justify-between items-center font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Header Section */}
      <header className="w-full bg-slate-900 text-white pt-8 pb-5 px-4 shadow-md border-b border-emerald-500/20 rounded-b-3xl">
        <div className="max-w-md mx-auto text-center space-y-1.5">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            স্থাপিত: ২০২২
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            যুব অগ্রযাত্রা সমবায় সমিতি
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            সরদার পাড়া, ভাঙ্গুড়া, পাবনা
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-md px-5 py-4 flex-1 flex flex-col justify-center">

        {/* Notice Board Section */}
        <div className="mb-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3 flex items-center space-x-3 shadow-sm overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-center bg-amber-500 text-white p-2 rounded-xl text-xs shrink-0 animate-pulse">
            <FaBullhorn className="text-base" />
          </div>
          <div className="overflow-hidden w-full text-xs font-semibold text-amber-900 whitespace-nowrap">
            <p className="inline-block animate-[marquee_25s_linear_infinite]">
              📢 নোটিশ: প্রতি মাসের ১ থেকে ৭ তারিখের মধ্যে আপনার টাকা পরিশোধ করুন জরিমানা এড়াতে। জরুরি প্রয়োজনে যোগাযোগ করুন - 01709132479
            </p>
          </div>
        </div>
        
        {/* Search Bar Link with Water Drop/Ripple Effect */}
        <div className="mb-4">
          <Link 
            to="/user" 
            className="relative overflow-hidden w-full py-3.5 px-4 flex items-center justify-between bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-emerald-500/50 transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(16,185,129,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="flex items-center space-x-3 z-10">
              <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 transition-colors duration-300 animate-pulse">
                <FiSearch className="text-lg" />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                হিসাব অনুসন্ধান করুন
              </span>
            </div>
            <span className="text-xs font-medium text-emerald-600 z-10">
              খুঁজুন →
            </span>
          </Link>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          
          {/* Item 1: All Accounts */}
          <Link 
            to="/outdoor" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(99,102,241,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-indigo-50 text-indigo-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-indigo-400/30 animate-ping opacity-75"></span>
              <MdAccountBalanceWallet className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              সকল হিসাব
            </span>
          </Link>

          {/* Item 2: Total Fund */}
          <Link 
            to="/fund" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(16,185,129,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping opacity-75"></span>
              <RiFundsLine className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              মোট ফান্ড
            </span>
          </Link>

          {/* Item 3: Committee */}
          <Link 
            to="/dev" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(245,158,11,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-amber-50 text-amber-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-amber-400/30 animate-ping opacity-75"></span>
              <FaUserClock className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              কমিটি সদস্য
            </span>
          </Link>

          {/* Item 4: Manager */}
          <Link 
            to="/admin" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(59,130,246,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-ping opacity-75"></span>
              <MdOutlineAdminPanelSettings className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              ম্যানেজার
            </span>
          </Link>

          {/* Item 5: Privacy Policy */}
          <Link 
            to="/privacy" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(71,85,105,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-slate-100 text-slate-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-slate-400/30 animate-ping opacity-75"></span>
              <MdAdminPanelSettings className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              গোপনীয়তা নীতি
            </span>
          </Link>

          {/* Item 6: Developer */}
          <Link 
            to="/me" 
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 ease-out active:scale-95 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(6,182,212,0.3)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.6s_ease-out] group"
          >
            <div className="relative p-3 rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-500 ease-out mb-2.5 z-10">
              <span className="absolute inset-0 rounded-2xl bg-cyan-400/30 animate-ping opacity-75"></span>
              <MdOutlineDeviceHub className="text-2xl relative z-10" />
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center z-10">
              ডেভেলপার
            </span>
          </Link>

        </div>
      </main>

      {/* Footer
      <footer className="w-full py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} YPCS। সর্বস্বত্ব সংরক্ষিত।
      </footer> */}

      {/* Ripple Animation CSS Injector */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </div>
  );
};

export default Banner;
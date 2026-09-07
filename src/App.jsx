import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function App() {
  const navigate = useNavigate();

  // পেছনে যাওয়ার জন্য
  const handleGoBack = () => {
    navigate(-1);
  };

  // সামনে যাওয়ার জন্য
  const handleGoForward = () => {
    navigate(1);
  };

  return (
    <div className="relative min-h-screen bg-slate-100 pb-20">
      
      {/* Dynamic Page Content */}
      <Outlet />

      {/* Floating Bottom Navigation Bar */}
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-xl rounded-2xl px-4 py-2 transition-all duration-300">
        <div className="flex justify-between items-center">
          
          {/* Back Button */}
          <button 
            onClick={handleGoBack}
            aria-label="পিছনে যান"
            className="relative overflow-hidden group p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 active:scale-95 transition-all duration-200 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.5s_ease-out]"
          >
            <MdOutlineKeyboardDoubleArrowLeft className="text-2xl group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Home Button */}
          <Link 
            to="/" 
            aria-label="হোম"
            className="relative p-3.5 bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 active:scale-90 transition-all duration-300 -mt-6 border-4 border-slate-100 dark:border-slate-900 group"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping opacity-75"></span>
            <RiHome2Line className="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-200" />
          </Link>

          {/* Forward Button */}
          <button 
            onClick={handleGoForward}
            aria-label="সামনে যান"
            className="relative overflow-hidden group p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 active:scale-95 transition-all duration-200 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:pointer-events-none after:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,transparent_10.01%)] after:bg-no-repeat after:bg-50% after:opacity-0 active:after:animate-[ripple_0.5s_ease-out]"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

        </div>
      </nav>

      {/* Ripple Animation Style */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
}

export default App;
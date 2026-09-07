import { FaGithub } from "react-icons/fa6";
import { HiMiniGlobeAlt, HiAcademicCap, HiBriefcase } from "react-icons/hi2";
import img from "../assets/file_00000000aec461f99be6d82da936aeaa.png";

const Me = () => {
  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 my-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Top Header Card */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-emerald-500/30 shadow-md"
              src={img}
              alt="Rony Ahmed"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Active"></span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase">
            Rony Ahmed
          </h1>
          <p className="text-xs font-semibold text-emerald-400 mt-1 uppercase tracking-wider flex items-center gap-1">
            <HiBriefcase className="text-sm" /> Network Engineer
          </p>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-medium">
            <HiAcademicCap className="text-indigo-600 text-base flex-shrink-0" />
            <span>Diploma in Computer Science & Engineering</span>
          </div>

          {/* Social & Portfolio Links */}
          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Rony-Ahmed6245"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 text-xs shadow-sm"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rony-ahmed.netlify.app/"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 text-xs shadow-sm"
            >
              <HiMiniGlobeAlt className="text-base" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
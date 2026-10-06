
import { Link } from "react-router-dom";
import {
  FaUserClock,
  FaBullhorn,
  FaUsers,
  FaFileInvoiceDollar,
} from "react-icons/fa6";
import {
  MdAccountBalanceWallet,
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
  MdOutlineDeviceHub,
  MdArrowForward,
  MdVerified,
  MdPayments,
  MdMoreHoriz,
} from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import {
  FiSearch,
  FiShield,
  FiChevronRight,
  FiBell,
  FiArrowUpRight,
} from "react-icons/fi";

const Banner = () => {
  const services = [
    {
      to: "/user",
      title: "হিসাব খুঁজুন",
      icon: FiSearch,
      bg: "bg-emerald-50",
      color: "text-emerald-600",
    },
    {
      to: "/outdoor",
      title: "সকল হিসাব",
      icon: MdAccountBalanceWallet,
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
    {
      to: "/fund",
      title: "মোট ফান্ড",
      icon: RiFundsLine,
      bg: "bg-violet-50",
      color: "text-violet-600",
    },
    {
      to: "/dev",
      title: "কমিটি",
      icon: FaUserClock,
      bg: "bg-orange-50",
      color: "text-orange-500",
    },
    {
      to: "/admin",
      title: "ম্যানেজার",
      icon: MdOutlineAdminPanelSettings,
      bg: "bg-cyan-50",
      color: "text-cyan-600",
    },
    {
      to: "/privacy",
      title: "গোপনীয়তা",
      icon: MdAdminPanelSettings,
      bg: "bg-slate-100",
      color: "text-slate-600",
    },
    {
      to: "/me",
      title: "ডেভেলপার",
      icon: MdOutlineDeviceHub,
      bg: "bg-pink-50",
      color: "text-pink-600",
    },
    {
      to: "/dev",
      title: "সদস্য",
      icon: FaUsers,
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-800 font-sans antialiased overflow-x-hidden">

      {/* =========================================================
          TOP PREMIUM HEADER
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#062c22] text-white rounded-b-[28px] shadow-[0_8px_30px_rgba(6,44,34,0.18)]">

        {/* =====================================================
            ANIMATED BACKGROUND BUBBLES
        ====================================================== */}

        <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-emerald-400/15 blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]" />

        <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl animate-[floatSlowReverse_10s_ease-in-out_infinite]" />

        <div className="absolute top-12 right-[25%] w-2 h-2 rounded-full bg-emerald-300/50 animate-[bubbleOne_5s_ease-in-out_infinite]" />

        <div className="absolute top-28 left-[18%] w-1.5 h-1.5 rounded-full bg-teal-300/40 animate-[bubbleTwo_6s_ease-in-out_infinite]" />

        <div className="absolute top-40 right-[12%] w-1 h-1 rounded-full bg-white/30 animate-[bubbleThree_7s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 left-[40%] w-1.5 h-1.5 rounded-full bg-emerald-300/30 animate-[bubbleOne_8s_ease-in-out_infinite]" />


        <div className="relative max-w-md mx-auto px-4 pt-5 pb-5">

          {/* Top bar */}
          <div className="flex items-center justify-between animate-[fadeDown_0.6s_ease-out]">

            <div className="flex items-center gap-2.5">

              <div className="relative w-9 h-9 rounded-xl bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-900/20 animate-[softFloat_4s_ease-in-out_infinite]">

                {/* Logo glow */}
                <span className="absolute inset-0 rounded-xl bg-emerald-300/30 animate-ping opacity-20" />

                <MdPayments className="relative text-xl text-[#062c22]" />

              </div>

              <div>
                <p className="text-[12px] font-bold text-white leading-none">
                  যুব অগ্রযাত্রা
                </p>

                <p className="text-[8px] text-white/45 mt-1 tracking-wide">
                  সমবায় সমিতি
                </p>
              </div>

            </div>


            {/* Notification */}
            <button
              type="button"
              className="relative w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/15 transition-colors"
            >

              <FiBell className="text-[15px] text-white/80 animate-[bell_4s_ease-in-out_infinite]" />

              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-[#062c22] animate-pulse" />

            </button>

          </div>


          {/* Mini greeting */}
          <div className="mt-6 animate-[fadeUp_0.7s_ease-out]">

            <p className="text-[9px] text-emerald-300/80 font-medium tracking-wide">
              DIGITAL COOPERATIVE
            </p>

            <div className="flex items-end justify-between mt-1">

              <div>
                <h1 className="text-[21px] font-extrabold tracking-tight leading-tight">
                  যুব অগ্রযাত্রা
                  <span className="text-emerald-300 animate-[textGlow_3s_ease-in-out_infinite]">
                    {" "}সমবায় সমিতি
                  </span>
                </h1>

                <p className="text-[9px] text-white/40 mt-1">
                  সরদার পাড়া • ভাঙ্গুড়া • পাবনা
                </p>
              </div>

              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/[0.08] border border-white/10 animate-[softFloat_5s_ease-in-out_infinite]">

                <MdVerified className="text-emerald-300 text-[11px]" />

                <span className="text-[8px] text-white/60">
                  ২০২২ থেকে
                </span>

              </div>

            </div>
          </div>


          {/* Compact account-style panel */}
          {/* <div className="mt-5 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md p-3.5 animate-[cardAppear_0.8s_ease-out]">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[8px] text-white/40 uppercase tracking-widest">
                  Organization
                </p>

                <p className="text-[12px] font-semibold text-white mt-1">
                  Digital Account Management
                </p>
              </div>

              <div className="relative w-8 h-8 rounded-xl bg-emerald-400/10 flex items-center justify-center">

                <span className="absolute inset-0 rounded-xl border border-emerald-300/20 animate-ping opacity-20" />

                <FiShield className="relative text-emerald-300 text-sm" />

              </div>

            </div>

            <div className="h-px bg-white/10 my-3" />

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[8px] text-white/35">
                  STATUS
                </p>

                <p className="text-[10px] font-semibold text-emerald-300 mt-0.5">
                  <span className="inline-block animate-pulse">●</span>{" "}
                  Active & Secure
                </p>
              </div>

              <div className="text-right">
                <p className="text-[8px] text-white/35">
                  ESTABLISHED
                </p>

                <p className="text-[10px] font-semibold text-white/75 mt-0.5">
                  ২০২২
                </p>
              </div>

            </div>

          </div> */}

        </div>
      </section>


      {/* =========================================================
          MAIN
      ========================================================== */}
      <main className="max-w-md mx-auto px-4 pb-7">


        {/* =======================================================
            NOTICE
        ======================================================== */}
        <div className="mt-3 animate-[fadeUp_0.7s_ease-out]">

          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">

            <div className="relative w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">

              <span className="absolute inset-0 rounded-lg bg-orange-300/20 animate-ping opacity-20" />

              <FaBullhorn className="relative text-xs animate-[noticeShake_4s_ease-in-out_infinite]" />

            </div>

            <div className="overflow-hidden flex-1">

              <div className="flex items-center gap-1.5 mb-0.5">

                <span className="text-[8px] font-bold text-orange-500 uppercase tracking-wider">
                  Notice
                </span>

                <span className="w-1 h-1 rounded-full bg-slate-300" />

                <span className="text-[8px] text-slate-400">
                  জরুরি তথ্য
                </span>

              </div>

              <p className="text-[9px] font-medium text-slate-600 whitespace-nowrap overflow-hidden">
                প্রতি মাসের ১–৭ তারিখের মধ্যে টাকা পরিশোধ করুন।
              </p>

            </div>

            <FiChevronRight className="text-slate-300 text-xs shrink-0" />

          </div>

        </div>


        {/* =======================================================
            SEARCH / QUICK ACTION
        ======================================================== */}
        <div className="mt-4 animate-[fadeUp_0.8s_ease-out]">

          <Link
            to="/user"
            className="group relative overflow-hidden flex items-center gap-2.5 p-2 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >

            {/* Shimmer */}
            <span className="absolute inset-y-0 -left-20 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-[shimmer_5s_ease-in-out_infinite]" />

            <div className="relative w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">

              <FiSearch className="text-base" />

            </div>

            <div className="relative flex-1 min-w-0">

              <p className="text-[11px] font-bold text-slate-800">
                হিসাব অনুসন্ধান
              </p>

              <p className="text-[8px] text-slate-400 mt-0.5">
                নাম / অ্যাকাউন্ট নম্বর দিয়ে খুঁজুন
              </p>

            </div>

            <div className="relative w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">

              <FiArrowUpRight className="text-slate-400 group-hover:text-emerald-500 text-xs transition-colors" />

            </div>

          </Link>

        </div>


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}
        <div className="flex items-center justify-between mt-6 mb-2.5 px-0.5 animate-[fadeUp_0.9s_ease-out]">

          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-emerald-600">
              Services
            </p>

            <h2 className="text-[13px] font-extrabold text-slate-800 mt-0.5">
              দ্রুত সেবা
            </h2>

          </div>

          <button
            type="button"
            className="text-[8px] font-semibold text-slate-400 flex items-center gap-1 hover:text-emerald-500 transition-colors"
          >
            সব দেখুন
            <FiChevronRight className="text-[10px]" />
          </button>

        </div>


        {/* =======================================================
            COMPACT SERVICE GRID
        ======================================================== */}
        <div className="grid grid-cols-4 gap-2">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (
              <Link
                key={`${item.to}-${index}`}
                to={item.to}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
                className="
                  group
                  min-w-0
                  flex flex-col
                  items-center
                  justify-center
                  py-3 px-1.5
                  rounded-2xl
                  bg-white
                  border border-slate-200/70
                  shadow-[0_3px_12px_rgba(15,23,42,0.035)]
                  hover:-translate-y-1
                  hover:shadow-md
                  active:scale-95
                  transition-all duration-200
                  animate-[tileAppear_0.55s_ease-out_both]
                "
              >

                <div
                  className={`
                    relative
                    w-10 h-10
                    rounded-[13px]
                    ${item.bg}
                    ${item.color}
                    flex items-center justify-center
                    group-hover:scale-110
                    group-hover:rotate-2
                    transition-transform duration-300
                  `}
                >

                  {/* Tiny glow */}
                  <span
                    className={`
                      absolute inset-0
                      rounded-[13px]
                      ${item.bg}
                      opacity-0
                      group-hover:opacity-70
                      blur-md
                      transition-opacity
                    `}
                  />

                  <Icon className="relative text-[18px]" />

                </div>

                <span className="mt-2 text-[9px] font-semibold text-slate-700 text-center leading-tight whitespace-nowrap">
                  {item.title}
                </span>

              </Link>
            );
          })}

        </div>


        {/* =======================================================
            FEATURE / INFORMATION CARD
        ======================================================== */}
        <div className="mt-5 animate-[fadeUp_1.1s_ease-out]">

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#06382b] to-[#08785a] p-3.5 shadow-[0_8px_25px_rgba(5,100,73,0.16)]">

            {/* Moving glow */}
            <div className="absolute -right-8 -top-10 w-28 h-28 rounded-full bg-emerald-300/10 blur-2xl animate-[floatSlow_6s_ease-in-out_infinite]" />

            {/* Tiny moving bubble */}
            <div className="absolute right-16 bottom-3 w-1.5 h-1.5 rounded-full bg-emerald-300/30 animate-[bubbleThree_5s_ease-in-out_infinite]" />

            <div className="relative flex items-center gap-3">

              <div className="relative w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                <span className="absolute inset-0 rounded-xl border border-emerald-300/10 animate-ping opacity-20" />

                <FaFileInvoiceDollar className="relative text-emerald-300 text-base" />

              </div>

              <div className="flex-1 min-w-0">

                <p className="text-[8px] text-emerald-300/80 uppercase tracking-wider font-bold">
                  Smart Management
                </p>

                <h3 className="text-[11px] text-white font-bold mt-0.5">
                  হিসাব রাখুন সহজে ও নিরাপদে
                </h3>

                <p className="text-[8px] text-white/40 mt-1">
                  সমিতির আর্থিক তথ্য এক জায়গায় পরিচালনা করুন।
                </p>

              </div>

              <MdArrowForward className="text-white/30 text-sm animate-[arrowMove_2s_ease-in-out_infinite]" />

            </div>

          </div>

        </div>


        {/* =======================================================
            BOTTOM MINI INFO
        ======================================================== */}
        <div className="grid grid-cols-3 gap-2 mt-3">

          <div className="bg-white border border-slate-200/70 rounded-xl py-2.5 text-center animate-[tileAppear_0.7s_ease-out_0.1s_both]">

            <p className="text-[11px] font-extrabold text-slate-700">
              Secure
            </p>

            <p className="text-[7px] text-slate-400 mt-0.5">
              নিরাপদ
            </p>

          </div>


          <div className="bg-white border border-slate-200/70 rounded-xl py-2.5 text-center animate-[tileAppear_0.7s_ease-out_0.2s_both]">

            <p className="text-[11px] font-extrabold text-slate-700">
              Digital
            </p>

            <p className="text-[7px] text-slate-400 mt-0.5">
              ডিজিটাল
            </p>

          </div>


          <div className="bg-white border border-slate-200/70 rounded-xl py-2.5 text-center animate-[tileAppear_0.7s_ease-out_0.3s_both]">

            <p className="text-[11px] font-extrabold text-slate-700">
              Trusted
            </p>

            <p className="text-[7px] text-slate-400 mt-0.5">
              বিশ্বস্ত
            </p>

          </div>

        </div>


        {/* =======================================================
            BOTTOM NAVIGATION
        ======================================================== */}
        {/* <div className="mt-5 animate-[fadeUp_1.2s_ease-out]">

          <div className="flex items-center justify-around px-2 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-sm">

            <Link
              to="/"
              className="group flex flex-col items-center gap-1 px-3 py-1.5"
            >

              <MdPayments className="text-[17px] text-emerald-500 group-hover:scale-110 transition-transform" />

              <span className="text-[7px] font-semibold text-emerald-600">
                হোম
              </span>

            </Link>


            <Link
              to="/user"
              className="group flex flex-col items-center gap-1 px-3 py-1.5"
            >

              <FiSearch className="text-[16px] text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />

              <span className="text-[7px] font-medium text-slate-400 group-hover:text-emerald-500">
                অনুসন্ধান
              </span>

            </Link>


            <Link
              to="/fund"
              className="group flex flex-col items-center gap-1 px-3 py-1.5"
            >

              <RiFundsLine className="text-[17px] text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />

              <span className="text-[7px] font-medium text-slate-400 group-hover:text-emerald-500">
                ফান্ড
              </span>

            </Link>


            <Link
              to="/me"
              className="group flex flex-col items-center gap-1 px-3 py-1.5"
            >

              <MdOutlineDeviceHub className="text-[17px] text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />

              <span className="text-[7px] font-medium text-slate-400 group-hover:text-emerald-500">
                প্রোফাইল
              </span>

            </Link>

          </div>

        </div> */}


        {/* Footer */}

        <div className="flex items-center justify-center gap-1.5 mt-4">

          <MdVerified className="text-[10px] text-emerald-500 animate-pulse" />

          <p className="text-[7px] text-slate-400">
            Youth Advancement Cooperative Society • 2022
          </p>

        </div>

      </main>


      {/* =========================================================
          LIGHTWEIGHT ANIMATION ENGINE
      ========================================================== */}

      <style>{`

        /* -----------------------------------------
           Soft floating background
        ----------------------------------------- */

        @keyframes floatSlow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-12px, 10px, 0) scale(1.04);
          }
        }


        @keyframes floatSlowReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(15px, -10px, 0) scale(1.05);
          }
        }


        /* -----------------------------------------
           Small floating bubbles
        ----------------------------------------- */

        @keyframes bubbleOne {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.25;
          }

          50% {
            transform: translateY(-28px) scale(1.5);
            opacity: 0.7;
          }
        }


        @keyframes bubbleTwo {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }

          50% {
            transform: translate(12px, -22px);
            opacity: 0.65;
          }
        }


        @keyframes bubbleThree {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.15;
          }

          50% {
            transform: translateY(-35px);
            opacity: 0.6;
          }
        }


        /* -----------------------------------------
           Logo / icons
        ----------------------------------------- */

        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }


        @keyframes bell {
          0%, 85%, 100% {
            transform: rotate(0deg);
          }

          88% {
            transform: rotate(8deg);
          }

          91% {
            transform: rotate(-8deg);
          }

          94% {
            transform: rotate(5deg);
          }

          97% {
            transform: rotate(-3deg);
          }
        }


        @keyframes noticeShake {
          0%, 90%, 100% {
            transform: rotate(0deg);
          }

          92% {
            transform: rotate(-8deg);
          }

          94% {
            transform: rotate(8deg);
          }

          96% {
            transform: rotate(-5deg);
          }

          98% {
            transform: rotate(3deg);
          }
        }


        /* -----------------------------------------
           Page entrance
        ----------------------------------------- */

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        @keyframes tileAppear {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* -----------------------------------------
           Search shimmer
        ----------------------------------------- */

        @keyframes shimmer {
          0% {
            transform: translateX(0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          35% {
            transform: translateX(480px);
            opacity: 0;
          }

          100% {
            transform: translateX(480px);
            opacity: 0;
          }
        }


        /* -----------------------------------------
           Text glow
        ----------------------------------------- */

        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 0 rgba(110,231,183,0);
          }

          50% {
            text-shadow: 0 0 12px rgba(110,231,183,0.25);
          }
        }


        /* -----------------------------------------
           Arrow movement
        ----------------------------------------- */

        @keyframes arrowMove {
          0%, 100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(4px);
          }
        }


        /* -----------------------------------------
           Accessibility
        ----------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>

    </div>
  );
};

export default Banner;


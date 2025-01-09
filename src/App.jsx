import { Link,  Outlet, useNavigate, } from "react-router-dom"

import { RiHome2Line } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";





function App() {
  // const location = useLocation();
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1); // Navigate back in the history
  };

  return (
    <div className="relative">

      <div className="bg-[#5378FC] w-full  fixed bottom-0">
        <div className="flex justify-around items-center">
        <button className="Border text-white p-3 rounded text-xl font-bold uppercase">
            <button className=" py-1 px-2 rounded-md" onClick={handleGoBack}><MdOutlineKeyboardDoubleArrowRight /></button>
          </button>
         
          <button className="Border bg-white text-black p-3 shadow-2xl rounded-full text-xl  font-bold uppercase">
            <Link to="/"><RiHome2Line /></Link>
          </button>
          <button className="Border  text-white p-3 rounded text-xl  font-bold uppercase">
            <Link to="/"><MdOutlineKeyboardDoubleArrowLeft /></Link>
          </button>
        </div>
      </div>
      {/* {location.pathname === '/' ? (
        <div className="fixed bottom-5 right-5 z-10">
          <button className="Border bg-white text-black p-3 rounded text-sm font-bold uppercase">
            <Link to="/">হোম</Link>
          </button>
        </div>
      ) : (
        <div className="fixed bottom-5 right-5 z-10">
          <button className="Border bg-white text-black p-3 rounded text-sm font-bold uppercase">
            <Link to="/">হোম</Link>
          </button>
        </div>
      )} */}

      <Outlet></Outlet>
    </div>
  )
}

export default App

import { Link, Outlet, useLocation } from "react-router-dom"





function App() {
  const location = useLocation();

  return (
    <div className="relative">

     {location.pathname === '/' ? (
        <div></div>
      ) : (
        <div className="fixed bottom-5 right-5 z-10">
          <button className="Border bg-white text-black p-3 rounded text-sm font-bold uppercase">
            <Link to="/">হোম</Link>
          </button>
        </div>
      )}

      <Outlet></Outlet>
    </div>
  )
}

export default App

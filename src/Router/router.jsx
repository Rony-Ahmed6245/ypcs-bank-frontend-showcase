import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Components/User";
import Admin from "../Components/Admin";
import Account from "../Components/Account";
import Dashboard2 from "../Components/Dashboard2";
import AccountFrom from "../Components/AccountFrom";
import DpFrom from "../Components/DpFrom";
import ManageAcc from "../Components/ManageAcc";
import PaymentHistry from "../Components/PaymentHistry";
import ErrorPage from "../Components/ErrorPage";
import Guide from "../Components/Guide";
import Banner from "../Components/Banner";
import Dev from "../Components/Dev";
import AllAccount from "../Components/AllAccount";
import Privacy from "../Components/Privacy";
import Me from "../Components/Me";
import Fund from "../Components/Fund";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>,
            },
            {
                path:'/user',
                element:<User></User>,
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            },
            {
                path:'/dev',
                element:<Dev></Dev>
            },
            {
                path:'/allAccount',
                element:<AllAccount></AllAccount>
            },
            {
                path:'/privacy',
                element:<Privacy></Privacy>
            },
            {
                path:'/me',
                element:<Me></Me>
            },
            {
                path:'/fund',
                element:<Fund></Fund>,
                loader: ()=> fetch("https://bank-server-theta.vercel.app/v1/userAmounts")
            },
            {
                path:"/user/:acc_no",
                element:<Account></Account>,
                loader: ()=> fetch("https://bank-server-theta.vercel.app/v1/userAmounts")
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard2></Dashboard2>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'newAccount',
                element:<AccountFrom></AccountFrom>,
            },
            {
                path:'dp',
                element:<DpFrom></DpFrom>,
            },
            {
                path:'manageAcc',
                element:<ManageAcc></ManageAcc>,
                loader: ()=> fetch("https://bank-server-theta.vercel.app/v1/userAmounts")
            },
            {
                path:'pay',
                element:<PaymentHistry></PaymentHistry>,
                loader: ()=> fetch("https://bank-server-theta.vercel.app/v1/userAmounts")
            },
            {
                path:'guide',
                element:<Guide></Guide>
            }
        ]
    }
])
export default router;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <div>
                <h1>Server down please try again letter</h1>
                <h1 className="text-center underline text-blue-600 text-sm font-semibold"><Link to="/">back to home</Link></h1>
            </div>
        </div>
    );
};

export default ErrorPage;
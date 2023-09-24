import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center ">
            <div className="alert alert-error h-[300px] w-[400px] mx-auto mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-3xl text-yellow-400 font-bold mt-28">Oops! Page not found.</span>
                </div>
                <Link to='/'><button className="btn">Go To Home Page</button></Link>
            
        </div>
    );
};

export default ErrorPage;
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import errorPageImg from "../../assets/errorpage.jpg"

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <section className="bg-white p-6">
            <div className="flex items-center">
            <div className="flex flex-col gap-3">
                <p>404 error </p>
               <h1>Page not found</h1>
               <p>Sorry, the page you are looking for doesnt exist.Here are some
               helpful links:</p>
               <div className="flex gap-4">
               <button onClick={()=>navigate(-1)} className="btn"><p className="flex gap-3 items-center"><span><FaArrowLeft /> </span><span>go back</span></p></button>
               <button className="btn"><Link to='/'> take me home</Link></button>
               </div>
            </div>
            <div className="w-1/2">
                <img src={errorPageImg} alt="" />
            </div>
            </div>
        </section>
    );
};

export default ErrorPage;
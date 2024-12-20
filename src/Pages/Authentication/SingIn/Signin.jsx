import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../CustomeHook/useAuth";
import signinImg from "../../../assets/signin.jpg"




const Signin = () => {
 const {signin,signInGoogle }=useAuth()
 const location=useLocation()
 const navigate=useNavigate()

 const from=location.state || ('/') ;

// --------sing in form work -----------
  const submitForm=async(e)=>{
   e.preventDefault()
   const form=e.target;
   const email=form.email.value;
   const password=form.password.value;
   try{
    const result=await signin(email,password)
    console.log(result)
    navigate(from,{replace:true})
   }
   catch(error){
    console.log(error.message)
   }

  }

  // ---------google form work
   
  const googleLogIn=async()=>{
    try{
      const result=await signInGoogle()
      console.log(result)
      navigate(from,{replace:true})
    }
    catch(error){
      console.log(error.message)
    }
  }

 
    return (
        <>
        <h1 className="text-5xl font-bold text-center text-pink-400 bg-gray-100 p-3">Login now!</h1>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            
            <img  src={signinImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={submitForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={googleLogIn} className="btn btn-active m-auto"><span className="text-2xl text-pink-400">Google Signin </span><FaGoogle className="text-2xl text-pink-400"/></button>
            <p className="p-5">if you do not have already an account <Link to='/sign-up' className="btn-link"> sign up</Link></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Signin;
import { Link } from "react-router-dom";
import registerImg from "../../../assets/registration.jpg"
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../CustomeHook/useAuth";

const Registration = () => {
 const {createUser,signInGoogle}=useAuth()

 const signUpSubmit=async(e)=>{
  e.preventDefault()
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  try{
    const result=await createUser(email,password)
    console.log(result)
  }
  catch(error){
    console.log(error.message)
  }
 }

 const googleLogIn=async()=>{
  try{
    const result=await signInGoogle()
    console.log(result)
  }
  catch(error){
    console.log(error.message)
  }
}

    return (
        <>
         <h1 className="text-5xl text-center text-pink-400 bg-gray-200 font-bold p-3">Registration Now</h1>
         
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            
            <img  src={registerImg} alt="No image" />
          </div>    

          <div>
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">        
            <form onSubmit={signUpSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give Your Photo</span>
                </label>
                {/* -----need to input require */}
                <input type="file" placeholder="email" className="input input-bordered"  />
              </div>
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
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
              <button onClick={googleLogIn} className="btn btn-active"><span className="text-2xl">Google Signin </span><FaGoogle className="text-2xl"/></button>
            <p className="p-5">if you have already an account <Link to='/sign-in' className="btn-link"> sign in</Link></p>
          </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Registration;
import { BsSearchHeart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../CustomeHook/useAuth";
const Navbar = () => {
  const {user,logOut}=useAuth()
  // console.log('navbar user ---->',user)
  return (
    <section >
      <div className="hidden md:flex justify-around">
      <div className="text-3xl font-extrabold font-serif bg-gradient-to-r from-pink-500 to-pink-900 text-transparent bg-clip-text">Velvety Glow</div>
        
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div>
            <button className="btn join-item bg-pink-500">
              <BsSearchHeart className="text-3xl" />
            </button>
          </div>
        </div>

        <div>
          {user? <div className="flex items-center gap-3">
            {/* avater for user pic */}
            <div className="dropdown dropdown-hover">
            <div className="avatar">
  <div className="w-11 rounded-full ">
    <img src={user?.photoURL} />
  </div>
</div>
<ul  className="dropdown-content menu bg-base-100 rounded-box z-[57] w-52 p-2 shadow">
    <li>{user?.displayName}</li>
   
  </ul>
</div>
<button onClick={logOut} className="btn text-pink-400 text-2xl">Log Out</button>
</div> : <div className="flex items-center gap-4">
                <FaRegUserCircle className="text-3xl"/>
            <h1 className="text-3xl  bg-gradient-to-r from-pink-500 to-pink-900 text-transparent bg-clip-text "> <span ><Link to='/sign-in' className=" btn-link ">Sign in</Link> </span> / <span ><Link to='/sign-up' className=" btn-link ">Sign up</Link> </span></h1>
            </div>}
            
        </div>

       <div className="flex gap-4 items-center">
       <div className="indicator">
            <h1><IoCartOutline className="text-3xl" /></h1>
            <p className="badge badge-sm indicator-item">0</p>
            
        </div>
        <div>
            <h1 className="text-3xl"> My blog ( <span>0</span> )</h1>
        </div>
       </div>
     
      </div>

      
    </section>
  );
};

export default Navbar;

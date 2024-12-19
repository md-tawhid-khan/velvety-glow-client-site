import { BsSearchHeart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
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
            <div className="flex items-center gap-4">
                <FaRegUserCircle className="text-3xl"/>
            <h1 className="text-3xl  bg-gradient-to-r from-pink-500 to-pink-900 text-transparent bg-clip-text "> <span ><Link to='/sign-in' className=" btn-link ">Sign in</Link> </span> / <span ><Link to='/sign-up' className=" btn-link ">Sign up</Link> </span></h1>
            </div>
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

      
    </>
  );
};

export default Navbar;

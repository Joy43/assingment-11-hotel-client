import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import logo from '../../assets/images/icon/logo.png'
import { useState } from "react";
const Navbar = () => {


    // -----------------dark mode---------------
const [isDarkMode,setDarkMode]=useState(false);
const toogleTheame=()=>{
    const htmlElement =document.documentElement;
    const currentTheme=htmlElement.getAttribute("data-theme");
    setDarkMode((prevDarMode) =>!prevDarMode);
    if (currentTheme==="synthwave") {
        htmlElement.setAttribute("data-theme","lofi");
  
    } else{
htmlElement.setAttribute("data-theme","synthwave")
    }
}

const themeIconSize = "30px";
 const naviteams=(
    <>
    <li>
     <Link to='/'> Home</Link>
    </li>
     
     <li>
         <Link to="/contat">Contact</Link>
     </li>
     <li>
         <Link to="/signup">Signup</Link>
     </li>
     <li>
         <Link to="/login">SignIn</Link>
     </li>
     <li>
         <Link to="/rooms">Books Now</Link>
     </li>
 </>
 )
    return (
      <div className="mt-3">
          <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naviteams}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 justify-between px-1">
          {naviteams}
        </ul>
      </div>
      <div className="navbar-end">
       
   {/* dark theme */}
<div className="tex-2xl mr-8">


<button className="text-[#FF3811] " onClick={toogleTheame}>
{isDarkMode ? <MdDarkMode size={themeIconSize} /> : <BsSunFill size={themeIconSize} />}
        </button>
        </div>

       <div>
       <button className="   btn ">World Hotel</button>
       </div>
      </div>
   
      
    </div>
      </div>
    );
};

export default Navbar;
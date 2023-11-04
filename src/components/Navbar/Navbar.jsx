import { Link } from "react-router-dom";


const Navbar = () => {

    <>
   <li>
    <Link to='/'> Home</Link>
   </li>
    
    <li>
        <Link to="/contat">Contact</Link>
    </li>
</>
    return (
        <div className="navbar bg-base-100">
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 justify-between px-1">
          {naviteams}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full">
          <img src={user?.metadata?.photoURL} />
        </div>
   {/* dark theme */}
<div className="tex-2xl">


<button className="text-[#FF3811] " onClick={toggleTheme}>
{isDarkTheme ? <MdDarkMode size={themeIconSize} /> : <BsSunFill size={themeIconSize} />}
        </button>
        </div>

       <div>
       <button className="  text-[#FF3811] btn ">Appointment</button>
       </div>
      </div>
   
      
    </div>
    );
};

export default Navbar;
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navStyles = ({ isActive }) =>
    isActive
      ? "text-[#23BE0A] border border-[#23BE0A] mr-4 mb-4 px-4 py-2 rounded-lg font-bold text-lg"
      : "text-black/80 hover:text-[#23BE0A] mr-4 mb-4 hover:border hover:border-[#23BE0A] px-4 py-2 rounded-lg transition-all duration-300 text-lg font-medium";

  const links = (
    <>
      <NavLink to="/" className={navStyles}>
        Home
      </NavLink>

      <NavLink to="/readList" className={navStyles}>
        Listed Books
      </NavLink>

      <NavLink to="/pagesToRead" className={navStyles}>
        Pages to Read
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-10 px-0 flex items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-2xl rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-[28px] font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] mr-4 text-white rounded-lg">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;

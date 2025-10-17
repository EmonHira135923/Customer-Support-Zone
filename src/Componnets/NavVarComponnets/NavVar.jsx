import React from "react";

const NavVar = () => {
  return (
    //  Nav Var Started
    <nav className="bg-gradient-to-r from-[#ffffff] to-[#f8f8f8] shadow-sm">
      <div className="navbar container mx-auto">
        {/* Left Start */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-[16px]">Home</a>
              </li>
              <li>
                <a className="text-[16px]">FAQ</a>
              </li>
              <li>
                <a className="text-[16px]">Changelog</a>
              </li>
              <li>
                <a className="text-[16px]">Blog</a>
              </li>
              <li>
                <a className="text-[16px]">Download</a>
              </li>
              <li>
                <a className="text-[16px]">Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-bold ml-2">CS — Ticket System</a>
        </div>

        {/* Right End  */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-[16px] font-medium">Home</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">FAQ</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">Changelog</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">Blog</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">Download</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">Contact</a>
            </li>
          </ul>
          <a className="btn ml-3 text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] border-none">
            <span className="mr-1 text-lg">+</span>New Ticket
          </a>
        </div>
      </div>
    </nav>
    /* Nav Var Ended */
  );
};

export default NavVar;

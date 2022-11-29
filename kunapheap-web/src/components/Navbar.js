import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="sm:-z-20 z-10 bg-yellow-50 w-full">   
      {toggleNav ? (
        <AiOutlineClose
          className={`text-4xl  fixed z-20 sm:hidden`}
          onClick={() => setToggleNav(!toggleNav)}
        />
      ) : (
        <AiOutlineMenuUnfold
          className={`text-4xl fixed top-16 z-10 sm:hidden`}
          onClick={() => setToggleNav(!toggleNav)}
        />
      )}

      <div
        className={` sm:bg-bgColor sm:text-2xl text-lg
         w-full sm:w-full justify-between px-1 sm:px-4 md:px-16
          font-semibold h-screen fixed sm:h-12 transition-all ease-in-out duration-1000
           ${
             toggleNav
               ? "translate-x-0 '"
               : "-translate-x-full sm:translate-x-0"
           }`}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <div className="bg-secondary sm:h-8 h-screen w-[50%] sm:w-full sm:bg-bgColor -mx-1 mt-2">
          <ul className="pt-10 sm:pt-0 flex flex-col sm:flex-row sm:justify-between">
            <Link to="/">
              <li
                className="hover:text-secondary px-2 cursor-pointer py-1 mx-1
             hover:bg-primary sm:hover:bg-transparent rounded-lg hover:px-3 sm:hover:px-2 "
              >
                Home
              </li>
            </Link>

            <Link to="/ourproduct">
              <li
                className="hover:text-secondary px-2 cursor-pointer py-1 mx-1
           hover:bg-primary sm:hover:bg-transparent rounded-lg hover:px-3 sm:hover:px-2"
              >
                Our Product
              </li>
            </Link>

            <Link to="/newarrival">
              <li
                className="hover:text-secondary px-2 cursor-pointer py-1 mx-1
           hover:bg-primary sm:hover:bg-transparent rounded-lg hover:px-3 sm:hover:px-2"
              >
                New Arrival
              </li>
            </Link>

            <Link to="/aboutus">
              <li
                className="hover:text-secondary px-2 cursor-pointer py-1 mx-1
           hover:bg-primary sm:hover:bg-transparent rounded-lg hover:px-3 sm:hover:px-2"
              >
                About Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

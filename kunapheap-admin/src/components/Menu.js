import React from "react";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="border rounded-md bg-blue-300 text-white mx-1 text-xl relative">
        <HiMenuAlt2 onClick={() => setToggleMenu(!toggleMenu)} className="text-4xl" />
        {toggleMenu && (
          <div className="absolute bg-white border-2 top-10 left-0 w-[150px] rounded-md">
            <h2 className="text-black">Menu</h2>
            <hr />
            <ul className="text-black text-base z-30">
              <Link to={"/"} className="w-fit">
              <li
                className="hover:bg-blue-300 px-2 py-2 hover:text-white"
                onClick={() => setToggleMenu(false)}
              >
                Dashboard
              </li>
              </Link>
              <Link to={"/productlist"} className="w-fit">
              <li
                className="hover:bg-blue-300 px-2 py-2 hover:text-white"
                onClick={() => setToggleMenu(false)}
              >
                Product
              </li>
              </Link>
              <Link to={"/addproduct"} className="w-fit">
              <li
                className="hover:bg-blue-300 px-2 py-2 hover:text-white"
                onClick={() => setToggleMenu(false)}
              >
                Add Product
              </li>
              </Link>
              <Link to={"/order"} className="w-fit">
              <li
                className="hover:bg-blue-300 px-2 py-2 hover:text-white "
                onClick={() => setToggleMenu(false)}
              >
                Order
              </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;

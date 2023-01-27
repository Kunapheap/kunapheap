import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { RiDashboardFill } from "react-icons/ri";
import {
  BsFillBagFill,
  BsFillCartCheckFill,
  BsBasketFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function SideBar() {
  const [active, setActive] = useState("");

  const handleActive = () => {
    const path = window.location.pathname;
    setActive(path.substring(1));
  };

  useEffect(() => {}, [active]);

  return (
    <>
      {localStorage.length === 0 ? (
        <div className="w-full h-screen">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} atl="log" className="w-12" />
            <h1 className="text-2xl font-bold text-center">Kunapheap</h1>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} atl="log" className="w-12" />
            <h1 className="text-2xl font-bold text-center">Kunapheap</h1>
          </div>
          <div onClick={handleActive}>
            <ul className="xl:text-xl lg:text-base flex flex-col gap-y-2 px-2 font-medium">
              <Link to="/dashboard">
                <li
                  className={`hover:bg-blue-200 transition-all ease-out
             hover:translate-x-2 flex gap-2 items-center rounded-md px-2 py-1 cursor-pointer
             ${active === "dashboard" ? "bg-blue-200" : ""}`}
                >
                  <RiDashboardFill />
                  <p>Dashboard</p>
                </li>
              </Link>
              <Link to="/productlist">
                <li
                  className={`hover:bg-blue-200 transition-all ease-out 
            hover:translate-x-2 flex gap-2 items-center rounded-md py-1 
             px-2 cursor-pointer ${
               active === "productlist" ? "bg-blue-200" : ""
             }`}
                >
                  <BsFillBagFill />
                  <p>Product</p>
                </li>
              </Link>
              <Link to="/addproduct">
                <li
                  className={`hover:bg-blue-200 transition-all ease-out 
            hover:translate-x-2 flex gap-2 items-center rounded-md py-1 
             px-2 cursor-pointer ${
               active === "addproduct" ? "bg-blue-200" : ""
             }`}
                >
                  <BsFillCartCheckFill />
                  <p>Add Product</p>
                </li>
              </Link>
              <Link to="/order">
                <li
                  className={`hover:bg-blue-200 transition-all ease-out 
            hover:translate-x-2 flex gap-2 items-center rounded-md py-1 
             px-2 cursor-pointer ${active === "order" ? "bg-blue-200" : ""}`}
                >
                  <BsBasketFill />
                  <p>Order</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;

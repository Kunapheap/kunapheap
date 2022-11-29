import React, { useEffect, useState } from "react";
import { IoNotificationsSharp, IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="sticky top-0">
        <div className=" flex flex-col-reverse md:flex-row items-center justify-between font-semibold py-2">
          <div className="w-full flex flex-row relative">
            <div className="w-[80%] relative pl-6">
              <input
                className=" w-[96%] pl-8
              lg:w-[96%] border-slate-600 outline-none py-2 lg:pl-8 bg-blue-300 rounded-full text-xs font-semibold placeholder:text-primary placeholder:text-base"
                placeholder="Type here..."
              />
              <IoSearchSharp className="absolute top-2 lg:top-2 left-9 lg:left-8 text-slate-700" />
              <select className="w-[19%] absolute right-8 top-1 pb-1 align-middle text-sm  text-slate-800 bg-blue-300 border-l-2 border-blue-500 focus:text-gray-700 focus:bg-blue-400 focus:border-blue-400 focus:outline-blue-500">
                <option value='id'>ID</option>
                <option value='name'>Name</option>
              </select>
            </div>
            <div className="w-[18%] bg-blue-300 rounded-2xl hover:shadow-lg">
              <button className="w-full h-full text-center text-primary ">Search</button>
            </div>
             
          </div>




          <div className="justify-between pl-8 lg:pl-0 flex py-2 gap-3 items-center mr-4 w-full lg:justify-end">
            <Clock />
            <div className="flex flex-row gap-3">

              <IoNotificationsSharp className="text-[18px] text-primary" />
              <FaUser className=" text-primary" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function Clock() {
  const [datetime, setDateTime] = useState("");

  function toTwoDigit(text) {
    text = text.toString();
    if (text.length < 2) {
      text = "0".concat(text);
    }
    return text;
  }
  const date = new Date();
  const date_string =
    toTwoDigit(date.getDay()) +
    "/" +
    toTwoDigit((date.getMonth() + 1).toString()) +
    "/" +
    date.getFullYear() +
    "  " +
    toTwoDigit(date.getHours()) +
    ":" +
    toTwoDigit(date.getMinutes()) +
    ":" +
    toTwoDigit(date.getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(date_string);
    }, 1000);
    return () => clearInterval(interval);
  }, [datetime]);

  return <p>{datetime}</p>;
}

export default Header;

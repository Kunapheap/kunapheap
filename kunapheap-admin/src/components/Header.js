import React, { useEffect, useState } from "react";
import { IoNotificationsSharp, IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between font-semibold py-2">
        <div className="w-full flex flex-row relative">
          <div className="w-[80%] relative pl-6">
            <input
              className=" w-[100%] pl-8
              lg:w-[90%] border-primary outline-none py-2 lg:pl-8  bg-blue-300 rounded-full text-xs font-semibold placeholder:text-primary placeholder:text-lg"
              placeholder="search"
            />
            <IoSearchSharp className="absolute top-2 lg:top-2 left-9 lg:left-8 text-primary" />
          </div>
          <div className="w-[15%] absolute left-80 top-1">
            <select className="pl-2 text-sm w-full bg-slate-300 rounded-full text-slate-700 dark:placeholder-primary dark:focus:ring-blue-500">
              <option value='id'>ID</option>
              <option value='name'>Name</option>
            </select>
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

import React, { useEffect, useState } from "react";
import { IoNotificationsSharp , IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between font-semibold">
        <div className="relative md:w-1/4 w-full">
        <input
          className="w-full border-black outline-none  lg:mx-6 pl-8  h-7 lg:pl-7 lg:pr-4 bg-blue-300 rounded-full text-xs font-semibold placeholder:text-black placeholder:text-sm"
          placeholder="search"
        />
        <IoSearchSharp className="absolute top-2 left-4 md:left-7" />
        </div>
        
        <div className="flex py-2 gap-3 items-center mr-4 w-full justify-end">
          <Clock />
          <IoNotificationsSharp className="text-[18px]" />
          <FaUser className="" />
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

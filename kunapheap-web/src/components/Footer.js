import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

function Footer() {
  const menus = [
    {
      menu: "Useful Link",
      items: [
        {
          item_path: "/",
          item_desc: "Home",
        },
        {
          item_path: "/ourproduct",
          item_desc: "Our Product",
        },
        {
          item_path: "/newarrival",
          item_desc: "New Arrival",
        },
        {
          item_path: "/aboutus",
          item_desc: "About Us",
        },
      ],
    },
    {
      menu: "Follow Us",
      items: [
        {
          item_path: "/",
          item_desc: "Facebook",
        },
        {
          item_path: "/",
          item_desc: "Instagram",
        },
        {
          item_path: "/",
          item_desc: "Tik Tok",
        },
      ],
    },
    {
      menu: "Service",
      items: [
        {
          item_path: "/",
          item_desc: "Online exchange",
        },
        {
          item_path: "/",
          item_desc: "Privacy",
        },
      ],
    },
    {
      menu: "Company",
      items: [
        {
          item_path: "/",
          item_desc: "Find location",
        },
        {
          item_path: "/",
          item_desc: "Telephone",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-secondary w-full py-4 pb-7 lg:px-24 fixed bottom-0 grid grid-cols-2 md:grid-cols-4">
        {menus.map((item, index) => (
          <div className="mx-4 " key={index}>
            <h3 className="font-bold"> {item.menu} </h3>
            <ul>
              {item.items.map((list, index) => (
                <Link to={list.item_path} key={index}>
                  <li className="text-sm font-semibold pl-4 py-0.5 hover:text-bgColor">
                    {list.item_desc}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
      <div className="w-full bg-primary fixed bottom-0">
          <p className="text-bgColor text-center">developing by Team168</p>
        </div>
    </>
  );
}

export default Footer;

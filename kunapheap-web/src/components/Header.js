import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { ImSwitch } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import logo from "../assets/logo.svg";
import "../style/App.css";

import { setUser } from "../app/slice/userSlice";
import {useNavigate} from 'react-router-dom'

function Header() {

  const [toggleCart, setToggleCart] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const navigater = useNavigate()

  return (
    
    <div className="w-full h-16 border-2 flex justify-between px-2 md:px-8 bg-white z-20 fixed top-0">
      <div onClick={() => navigater('/')}
       className="flex items-center">
        <img 
         src={logo} alt="logo" className="w-12 md:w-16 App-logo cursor-pointer" />
        <h1 className="text-2xl md:text-4xl font-semibold">Kunapheap Store</h1>
      </div>
      <div className="flex items-center gap-4 ">
        <FaSearch className="md:text-2xl"  />
        <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} setToggleProfile={setToggleProfile}  />
        <Profile toggleProfile={toggleProfile} setToggleProfile={setToggleProfile} setToggleCart={setToggleCart} />
      </div>
    </div>
  );
}

function Cart({toggleCart,setToggleCart,setToggleProfile}) {

  const handleToggle = () => {
    setToggleCart((prev) => !prev)
    setToggleProfile(false)
  }

  const cartItems = [1,2,3,4,5]
  return (
    <>
      <div className="relative">
        <FaShoppingCart className="md:text-2xl" onClick={handleToggle} />

        {toggleCart && (    
          <div className="absolute bg-white top-7 right-0 border-2 pl-1 w-56 sm:w-64 h-80
           text-sm font-semibold overflow-y-auto overflow-x-hidden
           scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-gray-100 ">
            <p className="sticky top-0 text-xl bg-white w-52">Cart</p>
            {cartItems.map((item, index) => (
              <div className="flex gap-2 py-2 my-2 border-2" key={index}>
                <img className="w-16" alt="" />
                <div>
                  <div className="border-b-2 border-b-secondary pb-2 mb-1">
                    <p>Long Sleeves</p>
                    <p className="text-secondary">$16.8</p>
                  </div>
                  <p>Color : orange</p>
                  <p>Size : S</p>
                  <p>Quantity : 1</p>
                  <BsTrash className=" -m-5 float-right" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function Profile({toggleProfile, setToggleProfile,setToggleCart}) {

  const handleToggle = () => {
    setToggleProfile((prev) => !prev)
    setToggleCart(false)
  }

  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  const navigater = useNavigate()

  useEffect(()=> {
   
  },[user])
  
  return (
    <>
      <div className="relative">
        {
          user.user_image_link === undefined ? <FaUser  className="md:text-2xl" onClick={() => navigater('/login') } /> 
          : <img src={user.user_image_link} onClick={handleToggle} alt="profile" className="w-8  border-2 border-primary rounded-full"  />
        }
        
        {toggleProfile && (
          <div className="absolute w-48 md:w-60 h-64 md:h-72 border-2 bg-white right-0 top-8 rounded-md px-3 py-1 shadow-md overflow-hidden">
            <p onClick={() => navigater('/editprofile')}
            className="text-secondary text-right cursor-pointer underline hover:text-primary">
              Edit
            </p>
            <div className="flex">
              <img
                className="w-10 md:w-14 border-1 rounded-full object-cover"
                alt="pro"
                src={user.user_image_link}
              />
              <div className="mx-2">
                <p className="font-bold -mb-1 md:text-xl ">{user.user_username}</p>
                <p className="text-xs font-light sm:font-normal">username</p>
              </div>
            </div>
            <p className="font-semibold -mb-1 md:mb-1 mt-1 md:text-xl">My account</p>
            <div className="">
              <p className="font-semibold -mb-1 mt-1 sm:text-[1rem]">{user.user_email}</p>
              <p className="text-xs">Email</p>
              <p className="font-semibold -mb-1 sm:text-[1rem]">{user.user_phone_number}</p>
              <p className="text-xs">Telephone</p>
            </div>
            <p className="font-semibold py-1 md:text-xl sm:mt-1">Setting</p>
            <div className="flex items-center gap-1 px-1  cursor-pointer">
              <FiSettings />
              <p className="text-sm md:text-[1rem] hover:text-secondary" onClick={()=> navigater('/resetpassword')}>Reset Password</p>
            </div>
            <div className="flex items-center gap-1 p-1 cursor-pointer" onClick={() => {
              localStorage.clear();
              dispatch(setUser({}));
              setToggleProfile(false)
            }}>
              <ImSwitch className="" />
              <p className="text-sm md:text-[1rem] hover:text-secondary">Log Out</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;

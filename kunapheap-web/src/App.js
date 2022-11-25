import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import { useDispatch } from "react-redux";
import axios from "axios";
import {Routes,Route} from 'react-router-dom'
import { setUser } from "./app/slice/userSlice";
import Home from "./pages/Home";
import OurPoduct from "./pages/OurPoduct";
import AboutUs from "./pages/AboutUs";
import NewArrival from "./pages/NewArrival";

import api from './app/api/apiRoute'

// "./components/Dashboard";
function App() {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  const getUserData = async () => {
    const res = await axios.get(
      `${api.get_user_url}${localStorage.getItem("username")}`,
      {

        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setUser(res.data));
  };

  useEffect(() => {
    if(!localStorage.getItem('token') === undefined){
      getUserData();
    }
    
  },[]);

  useEffect(()=> {

  },[loading])

  return (
    <div className="bg-bgColor w-full h-screen">
      <Header />
      <Navbar />
      <div className="mt-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourproduct" element={<OurPoduct />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login loading={loading} setLoading={setLoading} />} />
        <Route path="/signup" element={<SignUp loading={loading} setLoading={setLoading} />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { useDispatch } from "react-redux";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { setUser } from "./app/slice/userSlice";
import Home from "./pages/Home";
import OurPoduct from "./pages/OurPoduct";
import AboutUs from "./pages/AboutUs";
import NewArrival from "./pages/NewArrival";
import ResetPassword from "./pages/ResetPassword";

import api from "./app/api/apiRoute";
import EditProfile from "./pages/EditProfile";
import ViewProduct from "./pages/ViewProduct";

function App() {
  
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
    if (localStorage.length !== 0) {
      getUserData();
    } else {
      console.log("Hello");
    }
  });



  return (
    <div className="bg-bgColor w-full ">
      <Header />
      <Navbar />
      <div className="mt-14 sm:pt-14 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourproduct" element={<OurPoduct />} />
          <Route path="/newarrival" element={<NewArrival />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp  />}
          />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { get_user_url } from "./app/api/apiRoute";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {Routes,Route} from 'react-router-dom'
import { setUser } from "./app/slice/userSlice";
import Home from "./pages/Home";

// "./components/Dashboard";
function App() {
  const [loading,setLoading] = useState(false)
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const res = await axios.get(
      `http://localhost:8080/user/me/${localStorage.getItem("username")}`,
      {

        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(res.data);
    dispatch(setUser(res.data));
  };

  useEffect(() => {
    getUserData();
    console.log('render')
  }, []);

  useEffect(()=> {

  },[loading])

  return (
    <div className="bg-bgColor w-full h-screen">
      <Header />
      <Navbar />
      <div className="mt-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loading={loading} setLoading={setLoading} />} />
        <Route path="/signup" element={<SignUp loading={loading} setLoading={setLoading} />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;

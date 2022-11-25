import React, { useEffect, useState } from "react";

import {useNavigate} from 'react-router-dom'
import api from "../app/api/apiRoute";

import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [loading,setLoading] = useState(false)

  const navigater = useNavigate()

  useEffect(() => {
    setAlert("");
  }, [username, password]);

  const handleLogIn = async () => {
    if (username === "" || password === "") {
      setAlert("Input can't be empty!");
    } else {
      try {
        setLoading(true)
        const auth_data = await axios.post(
          api.user_login_url,
          {
            user_username: username,
            user_password: password,
          },
        );
        console.log(auth_data.data)
        localStorage.setItem('token','bearer '+auth_data.data.token)
        localStorage.setItem('username',auth_data.data.username)
        console.log(auth_data.data);
        setAlert("Success!");
        navigater('/');
        setLoading(false)
        
        window.location.reload();
      } catch (err) {
        setAlert(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col gap-y-6 items-center mt-16">
        <h1 className="font-bold text-3xl lg:text-4xl text-primary ">Log in</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="w-[70%] lg:w-[40%] placeholder:text-gray-400 pl-2 py-2 border-2 border-primary rounded-md outline-secondary"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[70%] lg:w-[40%] placeholder:text-gray-400 pl-2 py-2 border-2 border-primary rounded-md outline-secondary"
        />
        <div className="w-[70%] lg:w-[40%] text-start">
          <p className="text-red-600 text-start">{alert}</p>
        </div>
        <button
          onClick={handleLogIn}
          className="w-[70%] lg:w-[40%] bg-primary text-bgColor py-2 rounded-md hover:bg-secondary hover:text-primary hover:font-bold"
        >
          Log In
        </button>

        <p className="mt-2 lg:mt-5 cursor-pointer hover:text-secondary">Forget Password!</p>
        <button onClick={()=> navigater('/signup')}
        className="w-[70%] lg:w-[40%] bg-primary text-bgColor py-2 rounded-md mt-14  hover:bg-secondary hover:text-primary hover:font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;

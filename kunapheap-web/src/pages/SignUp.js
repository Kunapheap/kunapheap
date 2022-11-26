import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineLoading } from "react-icons/ai";

import api from "../app/api/apiRoute";
import Loading from "../components/Loading";

function SignUp({ loading, setLoading }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [alert, setAlert] = useState("");

  const navigater = useNavigate();

  useEffect(() => {
    setAlert("");
  }, [firstName, lastName, username, gender, phoneNumber, email, password]);

  const handleSignUp = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      gender === "" ||
      phoneNumber === "" ||
      email === "" ||
      password === ""
    ) {
      setAlert("Your input could not empty!");
    } else if (password.length <= 6) {
      setAlert("Passwords must more 6 than characters!");
    } else {
      setLoading(true);
      try {
        const auth_data = await axios.post(api.user_signUp_url, {
          user_firstname: firstName,
          user_lastname: lastName,
          user_username: username,
          user_password: password,
          user_gender: gender,
          user_phone_number: phoneNumber,
          user_email: email,
        });
        localStorage.setItem("token", "bearer " + auth_data.data.token);
        localStorage.setItem("username", auth_data.data.username);
      } catch (err) {
        setAlert(err.response.data.msg);
      }
      setLoading(false);
      navigater("/");
      window.location.reload();
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="w-[100%] flex flex-col gap-y-3 lg:gap-y-5 items-center mt-14">
        <h1 className="font-bold text-xl lg:text-3xl text-primary">Sign Up</h1>

        {/* Input First name, Last Name */}
        <div className="w-[80%] lg:w-[50%] flex flex-col gap-x-3 lg:flex-row gap-y-5">
          <div className="w-[100%] lg:w-[50%]">
            <p>First name</p>

            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              className="w-[100%] h-10 border-2 border-primary rounded-md px-2 outline-secondary"
            />
          </div>

          <div className="w-[100%] lg:w-[50%]">
            <p>Last name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className="w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary"
            />
          </div>
        </div>

        {/* Input Phone number */}
        <div className="w-[80%] lg:w-[50%]">
          <p>Phone number</p>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
            className="w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary"
          />
        </div>

        {/* Input Email */}
        <div className="w-[80%] lg:w-[50%]">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary"
          />
        </div>

        {/* Input username */}
        <div className="w-[80%] lg:w-[50%]">
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary"
          />
        </div>

        {/* Input Password */}
        <div className="w-[80%] lg:w-[50%]">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="w-[100%] h-10 border-2 border-primary rounded-md px-2  outline-secondary"
          />
        </div>

        {/* Input Gender */}
        <div className="w-[80%] lg:w-[50%] flex gap-x-4 mt-2">
          <p>Gender</p>
          <div className="flex gap-x-4 ml-8 items-center">
            <input
              id="radio-button1"
              name="radio-button"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              value="Female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="radio-button1">Female</label>
          </div>
          <div className="flex gap-x-4 items-center">
            <input
              id="radio-button2"
              name="radio-button"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              value="Male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="radio-button2">Male</label>
          </div>
        </div>

        {/* Button sign up */}
        <div className="w-[80%] lg:w-[50%] text-left">
          <p className="text-red-600">{alert}</p>
        </div>
        {/* {
          loading && <AiOutlineLoading className="animate-spin text-bgColor text-2xl font-extrabold" />
        } */}

        <button
          onClick={handleSignUp}
          className={` w-[80%] lg:w-[50%] bg-primary py-3 text-bgColor rounded-md  hover:bg-secondary hover:text-primary hover:font-bold`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;

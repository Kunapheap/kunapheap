import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../app/api/apiRoute";
import Loading from "../components/Loading";

function EditProfile() {
  const user = useSelector((state) => state.user.value);
  const [current_user, setCurrentUser] = useState(user);
  const [previewimage, setpreviewImage] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [images, setImage] = useState();
  const [firstname, setFirstname] = useState(current_user.user_firstname);
  const [lastname, setLastname] = useState(current_user.user_lastname);
  const [email, setEmail] = useState(current_user.user_email);
  const [phone_number, setPhoneNumber] = useState(
    current_user.user_phone_number
  );
  const [current_password, setCurrentPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigater = useNavigate();

  const uplaodImage = async () => {
    const data = {
      image: images,
    };
    await axios.post(
      api.uplaod_user_img + localStorage.getItem("username"),
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleUpdateDetail = async () => {
    setLoading(true);
    if (!previewimage.length < 1) {
      await uplaodImage();
    }

    try {
      const response = await axios.post(
        api.update_user,
        {
          firstname: firstname,
          lastname: lastname,
          phone_number: phone_number,
          email: email,
          username: localStorage.getItem("username"),
          password: current_password,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        alert("success");
        navigater("/");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (previewimage.length < 1) return;
    const newImageURL = [];
    previewimage.forEach((item) => newImageURL.push(URL.createObjectURL(item)));
    setImageURLs(newImageURL);
  }, [previewimage]);

  useEffect(() => {
    setCurrentUser(user);
  },[user]);

  return (
    <div>
      <div className="w-full h-screen">
        {loading && <Loading />}
        <h1 className="text-center text-3xl font-bold text-secondary">
          Edit Profile
        </h1>
        <div className="w-full flex justify-center pt-3">
          <div className="relative">
            <input
              className="w-24 h-20 absolute top-0 opacity-0 z-10"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setpreviewImage([...e.target.files]);
              }}
            />

            {imageURLs < 1 ? (
              <img
                src={user.user_image_link}
                className="w-24 rounded-full"
                alt="profile"
              />
            ) : (
              imageURLs.map((source, index) => (
                <img
                  className="w-20 rounded-full"
                  src={source}
                  key={index}
                  alt="profile"
                />
              ))
            )}

            <RiEditBoxLine className="text-2xl absolute bottom-0 right-1  text-black font-extrabold" />
          </div>
        </div>

        <div className="px-8 md:px-20 lg:px-36 xl:px-64">
          {/* First&Last */}
          <div className="w-full flex justify-center gap-4 flex-col lg:flex-row mt-4">
            <div className="w-full justify-center mt-4">
              <p>First Name</p>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                className="w-full h-10 pl-1 border-2 border-primary rounded-md"
              />
            </div>
            <div className="w-full justify-center mt-4">
              <p>Last Name</p>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                className="w-full h-10 pl-1 border-2 border-primary rounded-md"
              />
            </div>
          </div>

          {/* Phone number*/}
          <div className="w-full justify-center mt-4">
            <p>Phone number</p>
            <input
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="w-full h-10 pl-1 border-2 border-primary rounded-md"
            />
          </div>

          {/* Email */}
          <div className="w-full justify-center mt-4">
            <p>Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full h-10 pl-1 border-2 border-primary rounded-md"
            />
          </div>

          {/* Password */}
          <div className="w-full justify-center mt-4">
            <p>Current Password</p>
            <input
              value={current_password}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="password"
              className="w-full h-10 pl-1 border-2 border-primary rounded-md"
            />
          </div>

          <div className="w-full flex justify-center text-lg gap-4 mt-6">
            <button
              onClick={handleUpdateDetail}
              className="w-full  h-10 bg-primary hover:bg-secondary text-white rounded-lg"
            >
              Confirm
            </button>
            <button className="w-full h-10 bg-slate-300 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

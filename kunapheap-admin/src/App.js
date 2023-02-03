import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginAdmin from "./Pages/LoginAdmin"; 
import SeeMore from "./Pages/SeeMore";
import "./styles/App.css";

import { Routes, Route, useNavigate } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddProduct from "./Pages/AddProduct";
import Order from "./Pages/Order";
import ProductList from "./Pages/ProductList";
import SeeMoreOrder from "./Pages/SeeMoreOrder";
import UpdateProduct from "./Pages/UpdateProduct";
import axios from "axios";
import api from "./app/api/apiRoute";
import Error404 from "./components/Error404";

function App() {

  const user = useSelector(state => state.user.value)
  const navigator = useNavigate();
  const [img,setImg] = useState();

  const getUser = async () => {
    
    const res = await axios.get(api.get_user+localStorage.getItem("username"),
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    setImg(res.data.user_image_link)
    
  }

  const handleRoute = () => {
    if (localStorage.length === 0) {
      navigator('/login')
    } else {
      getUser();
      navigator('/')
    }
  }


  useEffect(() => {
    handleRoute();
  }, [user])

  return (
    <>
      <div className="flex flex-row items-center xl:w-[90%] lg:[95%] md:w-full mx-auto overflow-hidden">
        <div className="hidden md:w-[15%] lg:block md:mx-0 lg:mx-2">
          <SideBar />
        </div>
        <div className="lg:w-[85%] w-full h-screen">
          <Header img={img} />
          <Routes >
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/order" element={<Order />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/SeeMore" element={<SeeMore/>}/>
            <Route path="/SeeMoreOrder" element={<SeeMoreOrder />}/>
            <Route path="/updateProduct" element={<UpdateProduct />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" errorElement={< Error404 />} element={<Error404 />} />
          </Routes> 
          
        </div>
      </div>
    </>
  );
}

export default App;

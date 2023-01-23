import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginAdmin from "./Pages/LoginAdmin"; 
import SeeMore from "./Pages/SeeMore";
import "./styles/App.css";

import { Routes, Route, useNavigate } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddProduct from "./Pages/AddProduct";
import Order from "./Pages/Order";
import ProductList from "./Pages/ProductList";
import SeeMoreOrder from "./Pages/SeeMoreOrder";
import UpdateProduct from "./Pages/UpdateProduct";

function App() {

  const user = useSelector(state => state.user.value)
  const navigator = useNavigate();

  const handleRoute = () => {
    if (user.user_username === undefined) {
      navigator('/login')
    } else {
      navigator('/')
    }
  }


  useEffect(() => {
    handleRoute()
  }, [user])

  return (
    <>
      <div className="flex flex-row items-center xl:w-[90%] lg:[95%] md:w-full mx-auto overflow-hidden">
        <div className="hidden md:w-[15%] lg:block md:mx-0 lg:mx-2">
          <SideBar />
        </div>
        <div className="lg:w-[85%] w-full h-screen">
          <Header />
          <Routes >
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/order" element={<Order />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/SeeMore" element={<SeeMore/>}/>
            <Route path="/SeeMoreOrder" element={<SeeMoreOrder />}/>
            <Route path="/updateProduct" element={<UpdateProduct />} />
          </Routes> 
          
        </div>
      </div>
    </>
  );
}

export default App;

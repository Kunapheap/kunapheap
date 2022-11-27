import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginAdmin from "./Pages/LoginAdmin";
import "./styles/App.css";

<<<<<<< HEAD
import {Routes,Route, useNavigate} from 'react-router-dom'
=======

import { Routes, Route, useNavigate } from 'react-router-dom'
>>>>>>> daranyBranch
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddProduct from "./Pages/AddProduct";
import Order from "./Pages/Order";
import ProductList from "./Pages/ProductList";

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
<<<<<<< HEAD
        <div className="flex flex-row items-center xl:w-[90%] lg:[95%] md:w-full mx-auto">
          <div className="hidden md:w-[15%] lg:block md:mx-0 lg:mx-2">
            <SideBar />
          </div>
          <div className="lg:w-[85%] w-full">
          <Header />

         <Routes >
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/order" element={<Order />} />
          <Route path="/productlist" element={<ProductList />} />
         </Routes>
            
          </div>
        </div>
=======
      <div className="flex items-center">
        <div className="hidden md:w-[20%] md:block">
          <SideBar />
        </div>
        <div className="lg:w-[80%] w-full">
          <Header />

          <Routes >
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>

        </div>
      </div>

>>>>>>> daranyBranch
    </>
  );
}

export default App;

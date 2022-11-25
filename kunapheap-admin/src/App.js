import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginAdmin from "./Pages/LoginAdmin";
import "./styles/App.css";


import {Routes,Route, useNavigate} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const user = useSelector(state => state.user.value)
  const navigator = useNavigate();

  const handleRoute = () => {
    if(user.user_username === undefined){
      navigator('/login')
    }else{
      navigator('/')
    }
  }


  useEffect(() => {
    handleRoute()
  },[user])

  return (
    <>
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

    </>
  );
}

export default App;

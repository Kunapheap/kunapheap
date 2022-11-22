import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginAdmin from "./Pages/LoginAdmin";
import "./styles/App.css";
import axios from "axios";

function App() {


  return (
    <>
        <div className="flex items-center">
          <div className="hidden md:w-[20%] md:block">
            <SideBar />
          </div>
          <div className="lg:w-[80%] w-full">
          <Header />
            <LoginAdmin />
          </div>
        </div>

    </>
  );
}

export default App;

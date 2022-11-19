import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./styles/App.css";

function App() {
  return (
    <>
        <div className="flex items-center">
          <div className="hidden md:w-[20%] md:block">
            <SideBar />
          </div>
          <div className="lg:w-[80%] w-full">
          <Header />
            <Dashboard />
          </div>
        </div>

    </>
  );
}

export default App;

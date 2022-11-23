import React from 'react'
import Navbar from './components/Navbar'
import Header from './pages/Header'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

// "./components/Dashboard";
function App() {
  return (
    <div className='bg-bgColor w-full h-screen'>
      <Header/>
      <Navbar/>
      <SignUp/>
    </div>
  )
}

export default App
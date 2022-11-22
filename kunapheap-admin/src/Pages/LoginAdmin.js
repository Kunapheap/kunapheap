import React, { useState } from 'react'

function LoginAdmin() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState("")
  
  const tempData = {
    username: "Zin2",
    password: "168"
  }
  const handleConfirm = () => {
    if (username === "" || password === "") {
      setAlert("Input shouldn't be empty!")
      return ;
    }
    const data = {
      username,
      password
    }
    if(tempData.username === data.username && tempData.password === data.password){
      setAlert("Success")
    }else{
      setAlert("Invalid user!")
    }
  }
  return (
    <div>
      <div className='bg-blue-200 h-screen flex items-center justify-center'>
        <div className='p-30 bg-bgColor w-[50%] h-[56%] rounded-3xl flex flex-col items-center '>

          <h1 className='font-bold text-3xl mt-4 text-blue-400'>Welcome to Kunapheap</h1>
          <p className='text-blue-300 text-lg font-semibold pt-1'>Please input your detail!</p>
          <div className='w-full flex items-center flex-col gap-y-4 pt-12 pb-4'>
            <input type={Text} placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }}
              className='py-2 w-[70%] border-2 border-blue-400 rounded-lg pl-3 font-semibold placeholder:text-blue-300 outline-primary' />
            <input type={Text} placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}
              className='py-2 w-[70%] border-2 border-blue-400 rounded-lg pl-3 font-semibold  placeholder:text-blue-300  outline-primary' />
            <div className='w-[70%]'>
              <p className='text-red-600 text-left font-semibold text-base'>{alert}</p>
            </div>
          </div>
          <div className='w-full flex justify-center text-blue-500 font-semibold'>
            <p className='align-top font-bold text-3xl text-blue-400'>__________ &#160;</p>
            <p className='py-5  text-blue-400'> Log in</p>
            <p className='align-top font-bold text-3xl  text-blue-400'>&#160; __________</p>
          </div>
          <button onClick={handleConfirm}
            className='bg-blue-400 px-44 py-2 rounded-lg font-bold text-white text-lg'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin
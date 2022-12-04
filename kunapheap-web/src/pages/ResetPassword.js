import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../app/api/apiRoute'
import Loading from '../components/Loading'


function ResetPassword() {

  const [currentPass,setCurrentPass] = useState('')
  const [newPass,setNewPass] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [alert,setAlert] = useState('')
  const [loading,setLoading] = useState('')
  const navigator = useNavigate();

  const handleResetPass = async () => {

    if(newPass === "" || confirmPass === "" || currentPass === "") {
      setAlert('input must not be empty !')
      return;
    }
    if(newPass !== confirmPass) {
      setAlert('confirm password does not match')
      return
    }
    try{
      setLoading(true)
      const res = await axios.post(api.reset_user_pass_url,{
        username : localStorage.getItem("username"),
        current_password : currentPass,
        new_password : confirmPass
      },
      {
        headers : {
          Authorization : localStorage.getItem('token')
        }
      })
      if(res.status === 403) {
        alert('worng password !')
        console.log('wrong')
      }else {
          navigator('/')
      }
    } catch(err) {
      setAlert(err.response.data.msg)
    }
    setLoading(false)

  }

  useEffect(()=> {
      setAlert('') 
  },[confirmPass,currentPass,newPass])


  return (


    <div >
      {
        loading && <Loading />
      }
      <h1 className='pb-3 font-bold text-2xl lg:text-3xl text-secondary text-center'>Reset Password</h1>
      
        {/* Current password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>Current password</p>
          <input type='password' value={currentPass} onChange={(e) => setCurrentPass(e.target.value)}
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2' />
        </div>

        {/* New password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>New password</p>
          <input type='password' value={newPass} onChange={(e) => setNewPass(e.target.value)}
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2 ' />
        </div>

        {/* Confirm new password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>Confirm new password</p>
          <input type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2 ' />
            <p className='text-red-400 font-semibold text-lg w-full'>{alert}</p>
        </div>

        

        <div className='w-[70%] m-auto lg:mt-4 lg:w-[60%] lg:pb-6 lg:flex flex-row lg:gap-x-3'>
          <div className='w-full text-center mb-3 py-1 mt-3 bg-secondary rounded-md text-primary lg:w-[49%] lg:py-2'
           onClick={handleResetPass}>Confirm</div>
          <div className='w-full text-center mb-3 py-1 mt-3 bg-gray-300 rounded-md text-primary lg:w-[49%] lg:py-2'>Cancel</div>
        </div>
    </div>
  )
}

export default ResetPassword
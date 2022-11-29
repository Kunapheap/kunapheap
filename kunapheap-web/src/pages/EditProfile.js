import React, { useState } from 'react';
import {RiEditBoxLine} from 'react-icons/ri'

function EditProfile() {
  const [files, setFiles] = useState([])

  return (
    <div>
      <div className='w-[100%] h-screen'>
        <h1 className='text-center text-3xl font-bold text-secondary'>Edit Profile</h1>
        <div className='w-full flex justify-center pt-3'>
          <div className='w-20 relative'>
            <input className='w-28 h-28 absolute top-0 opacity-0' type='file' />
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='w-full'></img>
            <RiEditBoxLine className='text-2xl absolute bottom-0 right-1 text-black font-extrabold'/>
          </div>
        </div>

        {/* First&Last */}
        <div className='w-full flex justify-center gap-2 flex-col lg:flex-row mt-4'>
          <div className='w-full lg:w-[26%] flex items-center flex-col'>
            <p className='w-96'>First name</p>
            <input type='text' className='w-96 h-10 pl-1 border-2 border-primary rounded-md' />
          </div>
          <div className='w-full lg:w-[25%] flex items-center flex-col'>
            <p className='w-96'>Last name</p>
            <input type='text' className='w-96 h-10 pl-1 border-2 border-primary rounded-md' />
          </div>
        </div>

        {/* Phone number*/}
        <div className='w-full flex justify-center mt-4'>
          <div className='w-[51.5%] '>
            <p>Phone number</p>
            <input type='number' className='w-[100%] h-10 pl-1 border-2 border-primary rounded-md' />
          </div>
        </div>

        {/* Email */}
        <div className='w-full flex justify-center mt-4'>
          <div className='w-[51.5%] '>
            <p>Email</p>
            <input type='email' className='w-[100%] h-10 pl-1 border-2 border-primary rounded-md' />
          </div>
        </div>

        {/* Password */}
        <div className='w-full flex justify-center mt-4'>
          <div className='w-[51.5%] '>
            <p>Password</p>
            <input type='Password' className='w-[100%] h-10 pl-1 border-2 border-primary rounded-md' />
          </div>
        </div>

        <div className='w-full flex justify-center text-lg gap-2 mt-6'>
          <button className='w-[26%] h-10 bg-secondary rounded-lg'>Confirm</button>
          <button className='w-[25%] h-10 bg-slate-300 rounded-lg' >Cancel</button>
        </div>


      </div>
    </div>
  )
}

export default EditProfile
import React from 'react'
import logo from '../assets/logo.svg'
import '../style/App.css'

function Loading() {
  return (
    <div className='z-10 fixed w-full'>
        <div className='flex justify-center items-center'>
        <img src={logo} className='w-44 text-center App-logo-loading' ></img>
        </div>
    </div>
  )
}

export default Loading
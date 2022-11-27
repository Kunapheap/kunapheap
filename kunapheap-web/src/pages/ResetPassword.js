import React from 'react'

function ResetPassword() {
  return (
    <div>

      <h1 className='pb-3 font-bold text-2xl lg:text-3xl text-secondary text-center'>Reset Password</h1>

      
        {/* Current password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>Current password</p>
          <input type='Password'
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2 ' />
        </div>

        {/* New password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>New password</p>
          <input type='Password'
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2 ' />
        </div>

        {/* Confirm new password */}
        <div className='w-[70%] m-auto pb-4 lg:w-[60%] lg:pb-6'>
          <p>Confirm new password</p>
          <input type='Password'
            className='border-solid rounded-md border-2 border-primary text-lg w-full pl-1 lg:py-1 lg:pl-2 ' />
        </div>

        <div className='w-[70%] m-auto lg:mt-4 lg:w-[60%] lg:pb-6 lg:flex flex-row lg:gap-x-3'>
          <div className='w-full text-center mb-3 py-1 mt-3 bg-secondary rounded-md text-primary lg:w-[49%] lg:py-2'>Confirm</div>
          <div className='w-full text-center mb-3 py-1 mt-3 bg-gray-300 rounded-md text-primary lg:w-[49%] lg:py-2'>Cancel</div>
        </div>

    </div>
  )
}

export default ResetPassword
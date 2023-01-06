import React from 'react'

function TextBoxDate(props) {
    return (
    <>
      <div >
        <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'>{props.textBoxPropDate}</label>
        <input
          type="date"
          className='w-full  
          border-2 border-gray-400
          focus:outline-gray-500 focus:border-1  focus:border-gray-600 focus:ring-1
          font-normal text-base lg:text-lg text-gray-600
          rounded-md
          py-0.5 px-1 xl:py-1'
          placeholder="Select date"
        />
      </div>
    </>
  )
}

export default TextBoxDate
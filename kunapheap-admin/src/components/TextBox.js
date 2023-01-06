import React, { useEffect, useState } from "react";

function TextBox({ textBoxProp }) {
  useEffect(() => {
    console.log(textBoxProp)
  }, [])
  return (
    <>
      <div>
        <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-500'>{textBoxProp.labelName}</label>
        <input
          className='w-full 
          border-2 border-gray-300
          placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
          focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
          font-normal text-base lg:text-lg text-gray-600
          rounded-md 
          py-0.5 pl-1 xl:py-1 
          '
          type="text" placeholder={textBoxProp.placeholderName} />
      </div>
    </>
  )
}

export default TextBox
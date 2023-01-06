import React, { useEffect } from 'react'

function TextBoxDisplay({ textBoxDisplayProp }) {
  useEffect(() => {
    console.log(textBoxDisplayProp)
  }, [])
  return (
    <div>
      <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'
        // className="text-sm md:text-base font-medium text-gray-600"
      >
        {textBoxDisplayProp.labelName}
      </label>
      <input
        className="w-full
        border-2 border-gray-400
        placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
        focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
        font-normal text-base lg:text-lg text-gray-600
        rounded-md 
        py-0.5 pl-1 xl:py-1.5"
        placeholder={textBoxDisplayProp.placeholderName}
        disabled
      />
    </div>
  )
}

export default TextBoxDisplay
import React, { useState } from 'react'

function ChooseColor({selectColor,setSelectColor}) {
  const [colorCode, setColorCode] = useState("#000000")
  return (
    <>
      <div >
        <label className='flex text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'>Color</label>
        <div className='flex justify-center'>
          <input
            type="color"
            className="w-1/2 h-8 xl:h-10 px-0.5 rounded-md border-2 border-gray-400"
            onChange={(e) => { setSelectColor(e.target.value); console.log(colorCode) }}
          />
          <input
            className="w-1/2
                    placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                    focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                    font-normal text-sm lg:text-lg text-gray-600
                    rounded-md 
                    py-0 pl-1 xl:py-1.5"
            placeholder={selectColor}
            disabled
          />
        </div>

      </div>
    </>
  );
}

export default ChooseColor
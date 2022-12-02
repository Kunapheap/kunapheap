import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
function SeeMore() {
  return (
    <div >
      <div className="w-full bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        {/* Tittle Product>See more */}
        <div className='w-full flex relative'>
          <h1 className="font-bold text-xl ml-4 lg:text-3xl py-2 text-primary">Product List </h1>
          <IoIosArrowForward className='w-5 lg:w-10 text-lg lg:text-2xl absolute left-32 top-4 lg:left-44' />
          <h1 className="font-bold text-base lg:text-xl text-primary pl-5 pt-3 lg:pl-6 lg:pt-4">See more</h1>
        </div>

        <div className='w-full h-screen bg-bgColor rounded-l-2xl flex flex-col px-5 overflow-auto'>
          <div className='w-full flex flex-col lg:flex-row '> 
            {/* Image */}
            <div className='w-[50%] lg:w-[30%] bg-secondary mt-6'>
              <img src='' className='w-full h-80'></img>
            </div>

            {/* Input  */}
            <div className=' w-[100%] h-full lg:w-[70%] '>
              <div className='w-full flex  lg:flex-row gap-x-4 pl-4 pr-4 mt-6'>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Date in stock</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>

                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Date out stock</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
              </div>

              <div className='w-full flex lg:flex-row  gap-x-4 pl-4 pr-4 mt-6'>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Product Name</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>

                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Amount of products</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
              </div>

              <div className='w-full flex lg:flex-row gap-x-4 pl-4 pr-4 mt-6'>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Size</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Color</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
              </div>

              <div className='w-full flex  gap-x-4 pl-4 pr-4 mt-6'>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Product Price</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
                <div className='w-full'>
                  <label className='text-lg font-medium text-primary'>Discount</label>
                  <input className='w-full py-2 pl-1  border-2 border-gray-300 rounded-md' placeholder='Hello1' />
                </div>
              </div>
            </div>
          </div>
          {/* Div button */}
          <div className='w-full '>
            <button className='w-[10%] py-1 bg-gray-300 text-slate-600 text-lg font-bold rounded-lg '>Cencal</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default SeeMore
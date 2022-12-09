import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function SeeMoreOrder() {
  // function propsInput(paraInput){
  //   return paraInput
  // }
  let navigete = useNavigate()
  const propsInput = (paraInput) => {
    return paraInput
  }

  return (
    <div>
      <div className="w-full bg-blue-300 lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        {/* Tittle Product>See more */}
        <div className="w-full flex relative pl-5">
          <h1 className="font-bold text-xl lg:ml-4 mr-4 lg:text-3xl py-2 text-primary text-start">
            Order
          </h1>
          <IoIosArrowForward className="w-5 lg:w-10 text-lg lg:text-2xl absolute ml-14 lg:ml-4 top-4 lg:left-24" />
          <h1 className="font-bold text-base lg:text-xl text-primary pl-1 pt-3 lg:pl-3 lg:pt-4">
            See more
          </h1>
        </div>

        <div className="w-full h-screen flex lg:flex-col bg-bgColor rounded-l-2xl lg:pl-20 lg:pt-8 relative">
          <div className='w-full flex flex-col lg:flex-row justify-between
            overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-thumb-rounded-full'>
            <div className='w-[90%] lg:w-[45%] lg:m-0 h-[60%] m-auto'>
              <Input propsInput={propsInput("Order Date")} />
              <Input propsInput={propsInput("Customer's Name")} />
              <Input propsInput={propsInput("Customer's Tel")} />
              <Amount propsAmount={
                {
                  paraAmount: 12,
                  paraQty: 32,
                  paraDiscount: 1,
                  paraTotal: 12
                }
              } />
            </div>

            <div className='w-[90%] mt-2 md:mt-1 m-auto lg:mt-0 lg:w-[50%] h-[70%] overflow-auto bg-bgColor
                        overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full'>
              <ImageOrder />
              <ImageOrder />
              <ImageOrder />
              <ImageOrder />
              <ImageOrder />
              <ImageOrder />
            </div>
          </div>
          <div className='w-[94%] lg:w-[90%] h-12 absolute right-4 bottom-32 md:right-8 md:bottom-24 lg:right-2 lg:bottom-28 xl:bottom-36 bg-bgColor'>
            <button onClick={() => navigete(-1)}
              className="bg-gray-400 font-bold text-white rounded-lg px-3 py-1 float-right ">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Input(props) {

  return (
    <>
      <div className='mb-3 lg:mb-8 xl:mb-12 2xl:mb-16'>
        <label className='text-sm font-medium pl-1 lg:text-lg xl:text-xl text-gray-500'>{props.propsInput}</label>
        <input className='w-full border-2 border-gray-300 h-8 lg:h-9 xl:h-11 rounded-lg' />
      </div>
    </>
  )
}

function Amount({ propsAmount }) {
  return (
    <>
      <div className='px-2 flex justify-between text-gray-500 text-base lg:text-lg xl:text-xl'>
        <h1 className='font-semibold'>Amount</h1>
        <h1 className='font-normals'>${propsAmount.paraAmount}</h1>
      </div>
      <div className='px-1 lg:px-2 border-2 border-gray-400 rounded-lg'>
        <div className='flex justify-between text-sm lg:text-base xl:text-lg text-gray-500'>
          <h1 className='font-semibold'>Quantity product</h1>
          <h1 className='font-normals'>{propsAmount.paraQty} items</h1>
        </div>
        <div className='flex justify-between text-sm lg:text-base xl:text-lg text-gray-500'>
          <h1 className='font-semibold'>Discount</h1>
          <h1 className='font-normal'>${propsAmount.paraDiscount}</h1>
        </div>
        <div className='flex justify-between text-sm lg:text-base xl:text-lg text-gray-500'>
          <h1 className='font-semibold'>Total</h1>
          <h1 className='font-normal'>${propsAmount.paraDiscount}</h1>
        </div>
      </div>

    </>
  )
}

function ImageOrder() {
  return (
    <>
      <div className='flex justify-between mb-2 md:pr-72 lg:px-0 lg:mb-4 xl:px-8 2xl:px-5'>
        <div className='w-24 h-28 md:w-36 md:h-48 lg:w-40 lg:h-56 xl:w-52 xl:h-64 bg-blue-600'></div>
        <div className='text-sm lg:text-base pr-36 lg:pr-24 xl:text-lg text-gray-500 font-semibold xl:pr-8 2xl:pr-48'>
          <p>NameProduct</p>
          <p>11212121212</p>
          <p>$21.32</p>
          <p>Orange</p>
          <p>Qty 1</p> 
        </div>
      </div>
    </>

  )
}

export default SeeMoreOrder
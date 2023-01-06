import React from 'react'

function Amout({propsAmount}) {
  return (
    <>
      <div className='px-2 flex justify-between text-gray-500 text-base lg:text-lg xl:text-xl'>
        <h1 className='font-semibold'>Amount</h1>
        <h1 className='font-normals'>${propsAmount.paraAmount}</h1>
      </div>
      <div className='px-1 lg:px-2 border-2 border-gray-300 rounded-lg'>
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

export default Amout
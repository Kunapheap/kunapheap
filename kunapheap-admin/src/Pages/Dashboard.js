import React from 'react'
import BarChart from '../components/BarChart'
import PieChart from "../components/PieChart"

function Dashboard() {
  return (
    <>
      <div className="w-full h-screen bg-blue-200 lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">

      <h1 className="font-bold text-xl ml-4 lg:text-2xl xl:text-3xl py-1.5 text-primary">Add Product</h1>
      <div className='p-4'>
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-orange-500 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Pre-Oder</h1>
                <h1 className='text-center text-2xl'>168</h1>
                <h4>Products</h4>
            </div>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-green-600 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Ordered</h1>
                <h1 className='text-center text-2xl'>169</h1>
                <h4>Products</h4>
            </div>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-red-600 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Product in Stock</h1>
                <h1 className='text-center text-2xl'>1608</h1>
                <h4>Products</h4>
            </div>
        </div>

        <div className='mt-10 md:flex gap-4 '>
            <div className='statistic w-full md:w-[67%] rounded-lg p-4 border shadow-lg bg-white'>
              <div className='mt-4 h-full flex justify-center items-center'>
                 <BarChart />
              </div>
            </div>


            <div className='pichat w-full md:w-[33%] rounded-lg border shadow-lg p-4 mt-4 md:mt-0 bg-white'>
                                 <h1 className='it font-semibold text-center'>Popular Products</h1>
                <div className='mb-4 h-full flex justify-center items-center '>
                    <PieChart />
                    
                </div>
                <div className='m mb-6'></div>
            </div>
        </div>        
    </div>
        
      </div>
    </>
  )
}

export default Dashboard
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../app/api/apiRoute';
import { setCategory } from '../app/user/categorySlide';
import { setProduct } from '../app/user/productSlide';
import BarChart from '../components/BarChart'
import Loading from '../components/Loading';
import PieChart from "../components/PieChart"

function Dashboard() {

  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector(state => state.product.value);
  const [amoutChart,setChartAmout] = useState(0);
  const [amoutStock,setAmoutStock] = useState(0);


  const getAllProduct = async () => {
    const res = await axios.get(api.get_all_product);
    dispatch(setProduct(res.data));
  };

  const getAllCategory = async () => {
    setLoading(true);
    const res = await axios.get(api.get_all_category);
    dispatch(setCategory(res.data));
    setLoading(false);
  };

  const getDashboardData = async () => {
    const res = await axios.get(api.dashboard_data);
    setChartAmout(res.data.categories_amout)
    setAmoutStock(res.data)
  }

  useEffect(() => {
    
    if (product.length === 0) {
        getAllProduct();
        getAllCategory();
      }
      getDashboardData();
  },[])


  return (
    <>
      <div className="w-[90%] h-screen bg-blue-200 lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">

      <h1 className="font-bold text-xl ml-4 lg:text-2xl xl:text-3xl py-1.5 text-primary -z-10">Dashboard</h1>
      <div className='p-4'>
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-red-500 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Out Stock Item</h1>
                <h1 className='text-center text-2xl'>{amoutStock.out_stock_item} </h1>
                <h4>items</h4>
            </div>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-orange-600 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Ordered</h1>
                <h1 className='text-center text-2xl'>5</h1>
                <h4>orders</h4>
            </div>
            <div className='h-32 shadow-lg border items-center p-4 rounded-lg justify-center text-center text-green-600 bg-white'>
                <h1 className='font-bold text-center text-2xl'>Amout items in Stock</h1>
                <h1 className='text-center text-2xl'>{amoutStock.Amout_item_in_stock}</h1>
                <h4>units</h4>
            </div>
        </div>

        <div className='mt-10 md:flex gap-4 '>
            <div className='statistic w-full md:w-[67%] rounded-lg p-4 border shadow-lg bg-white'>
              <div className='mt-4 h-full flex justify-center items-center'>
                 <BarChart />
              </div>
            </div>


            <div className='pichat w-full md:w-[33%] rounded-lg border shadow-lg p-4 mt-4 md:mt-0 bg-white'>
                                 <h1 className='it font-semibold text-center'>Amout by Category</h1>
                <div className='mb-4 h-full flex justify-center items-center '>
                  {
                    loading ? <Loading color={"#bfdbfe"} type={"spin"} h={'10rem'} w={'10rem'} />
                    : <PieChart amout={amoutChart} />
                  }
                    
                    
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
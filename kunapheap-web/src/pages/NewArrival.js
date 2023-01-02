import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../app/api/apiRoute';
import { setNewArrivalPage } from '../app/slice/newArrivalPage';
import { setViewProduct } from '../app/slice/viewProductSlide';
import LayoutModel from '../components/LayoutModel';

function NewArrival() {

  const [laoding, setLoading] = useState(false);

  const productpage = useSelector((state) => state.new_arrival_page.value);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const getProduct = async () => {
    setLoading(true);
    const res = await axios.get(api.getNewArrivalPage);
    dispatch(setNewArrivalPage(res.data));
    setLoading(false);
    return;
  };

  useEffect(() => {
    if (productpage.length === 0) {
      getProduct();
    }
  });

  const handleViewProduct = (product_id) => {
    dispatch(setViewProduct(product_id))
    navigator('/viewproduct')
  }

  return (
    
    <div>
       {laoding && (
        <div className="w-full">
          <FiLoader className="loading-logo text-[100px] text-slate-300 h-15 w-15 mx-auto" />
        </div>
      )}
      {/* product Grid */}
      <h1 className="font-bold text-2xl px-4 lg:px-16 pt-5">New Arrived</h1>
      <div
        className="justify-center items-center grid grid-cols-2 p-2 md-px=10 gap-y-4 gap-x-2
      sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-6 lg:px-16 lg:gap-y-8"
      >
        {productpage.map((product) => (
          <div 
          key={product.product_id}
          onClick={() => handleViewProduct(product.product_id)}>
            <LayoutModel
              product={product}
            />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center my-2'>
        <button className='font-bold h-10 border border-primary px-4 rounded-lg'>see more</button>
      </div>
    </div>
    
  )
}

export default NewArrival
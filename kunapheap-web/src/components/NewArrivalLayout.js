import React, { useEffect, useState } from "react";
import LayoutModel from "./LayoutModel";
import { FiLoader } from "react-icons/fi";

import "../style/App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import api from "../app/api/apiRoute";
import { useNavigate } from "react-router-dom";
import { setViewProduct } from "../app/slice/viewProductSlide";
import { setNewArrivalProduct } from "../app/slice/newArrivalProduct";

function NewArrivalLayout() {
  const [laoding, setLoading] = useState(false);

  const products = useSelector((state) => state.new_arrival_product.value);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const getProduct = async () => {
    setLoading(true);
    let res = await axios.get(api.getNewArrivalProduct);
    console.log(res.data)
    dispatch(setNewArrivalProduct(res.data));
    setLoading(false);
    return;
  };

  useEffect(() => {
    if (products.length === 0) {
      getProduct();
    }
    const time = setTimeout(() => {
     
    }, 2000);

    return () => {
      clearTimeout(time);
    };
    
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
        {products.map((product) => (
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
        <button className='font-bold h-10 border border-secondary px-4 rounded-lg' 
        onClick={() => navigator('/newarrival')}
        >see more</button>
      </div>
    </div>
  );
}

export default NewArrivalLayout;

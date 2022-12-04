import React, { useEffect, useState } from "react";
import LayoutModel from "./LayoutModel";
import {FiLoader} from 'react-icons/fi'

import '../style/App.css'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../app/slice/productSlide";
import api from "../app/api/apiRoute";

function NewArrivalLayout() {

  const [laoding, setLoading] = useState(false);

  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const getProduct = async () => {
    setLoading(true);
    const res = await axios.get(api.getAllProdct);
    dispatch(setProduct(res.data));
    setLoading(false);
    return;
  };

  useEffect(() => {
    if (products.length === 0) {
      getProduct();
    }
  },);

  return (
    <div>
      {laoding && (
        <div className="w-full">
            <FiLoader  class="loading-logo text-[100px] text-slate-300 h-15 w-15 mx-auto"  />
        </div>
      )}
      {/* product Grid */}
      <h1 className="font-bold text-2xl px-4 lg:px-16 pt-5">New Arrived</h1>
      <div
        className="justify-center items-center grid grid-cols-2 p-2 md-px=10 gap-y-4 gap-x-2
      sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-6 lg:px-16 lg:gap-y-8"
      >
        {products.map((product) => (
          <LayoutModel product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalLayout;

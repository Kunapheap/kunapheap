import React, { useEffect, useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../app/api/apiRoute";
import Loading from "../components/Loading";
import ViewProductLayout from "../components/ViewProductLayout";

function ViewProduct() {
  const navigate = useNavigate();
  const view_product = useSelector((state) => state.view_product.value);
  const [product,setProduct] = useState();
  const [colorIndex,setColorIndex] = useState(0);
  const [loading,setLoading] = useState(false);
  const [quantity,setQuantity] = useState(1);

  const handleViewProduct = async () => {
    setLoading(true)
    const res = await axios.get(api.getOneProduct+view_product)
    console.log(res.data)
    setProduct(res.data)
    setLoading(false)
    return;
  }


  useEffect(() => {
    if(view_product === undefined){
        navigate("/");
    } else {
      handleViewProduct();
    }
  },[view_product]);

  useEffect(() => {

  },[colorIndex])

  return (
    <>
    {
      loading && <Loading />
    }
      {product !== undefined && (
        <div className="flex flex-col sm:flex-row py-5">
          <div className="w-full sm:w-[50%] h-[50%] flex justify-center ">
            <ViewProductLayout image={product.product.image[0].image_link} />
          </div>
          <div className="w-full flex flex-col px-5">
            <p className="font-semibold text-xl">{product.product.product_name}</p>
            <h3 className="font-semibold text-2xl text-secondary mb-2">
              $ {product.product.product_price}
            </h3>
            <h2 className="font-semibold text-2xl">Our Product</h2>
            <div className="flex gap-3">
              {product.colorOnSize.map((item, index) => (
                <div className="py-2" key={index} onClick={() => setColorIndex(index)}>
                  <div className="sm:w-16 w-12 sm:h-14 h-10" style={{ backgroundColor: item.color }}>
                    {" "}
                  </div>
                  <p className="font-semibold text-center py-1 " style={{color : item.color }}>{ item.color }</p>
                </div>
              ))}
            </div>
            <h2 className="font-semibold text-2xl">Size</h2>
            <select
              className="sm:w-1/3 w-96  px-2 py-1 font-semibold border border-primary rounded-lg
                              transition ease-in-out focus:border-secondary outline-none my-2"
            >
              {
                product.colorOnSize[colorIndex].size.map((size,index)=>{
                  if(size !== null) {
                    return (<option value={size} key={index}>{size}</option>)
                  }
                  
                    
                })
              }
            </select>
            <h2 className="font-semibold text-xl">Quantity</h2>
            <div className="flex items-center justify-around w-20 ml-2 my-2">
              <button className="p-1 bg-secondary rounded-md text-[20px] font-semibold"
               onClick={() => {
                if(quantity > 1) {
                  setQuantity(quantity-1)
                }
               }}>
                <GrFormSubtract />
              </button>
              <p className="w-8 text-center text-xl bg-white shadow-sm text-primary px-3 mx-1 mr-2 font-bold">
                {quantity}
              </p>
              <button className="p-1 bg-secondary rounded-md text-[20px] font-semibold" 
              onClick={() => setQuantity(quantity+1)}>
                <HiPlus />
              </button>
            </div>
            <div className="flex justify-end sm:justify-start">
            <button className="bg-primary text-white font-semibold rounded-md mt-4 w-1/3 py-1 ">
              Add to cart
            </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default ViewProduct;

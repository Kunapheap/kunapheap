import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../app/api/apiRoute";
import ReactLoading from 'react-loading';

function SeeMore() {

  const navigate = useNavigate();
  const item = useSelector(state => state.item.value);

  const [image,setImage] = useState("")
  const [loading,setLoading] = useState(false);

  const data = [
    {
      dateInStock: "12/Nov/2022",
      dateOutStock: "12/Dec/2022",
      nameProduct: "CropTop",
      amountProduct: 0,
      sizeProduct: "M",
      colorProductCode: "#894545",
      colorProduct: "Fired Clay",
      priceProduct: 12.31,
      discount: 0,
    }
  ]

  const getImg = async () => {
    setLoading(true)
    const res = await axios.get(api.get_image+item.item_id);
    setImage(res.data[0].image_link)
    setLoading(false)
  }

  // useEffect(() => {
    
  // },[])

  useEffect(() => {
   if(item.item_created_date === undefined) {
    navigate("/")
   } else {
    getImg();
   }
  },[item])
 
  return (

    <div>
      {
        loading ?  
        <div className="h-3/4 w-full flex justify-center items-center">
        <ReactLoading type={"spin"} color={"#FFFFFF"} height={ '8rem'} width={'8rem'} />
      </div>
        : (
          <div className="w-full bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        {/* Tittle Product>See more */}
        <div className="w-full flex relative">
          <h1 className="font-bold text-xl ml-4 lg:text-3xl py-2 text-primary">
            Product List
          </h1>
          <IoIosArrowForward className="w-5 lg:w-10 text-lg lg:text-2xl absolute left-32 top-4 lg:left-44" />
          <h1 className="font-bold text-base lg:text-xl text-primary pl-5 pt-3 lg:pl-6 lg:pt-4">
            See more
          </h1>
        </div>

        <div className="w-full h-screen bg-bgColor rounded-l-2xl ">
          <div className=" w-full overflow-auto flex-col lg:flex-row h-[80%] 
                  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full">
            

                <div className="w-full flex">
                <div className="w-[30%]">
              <img alt="img" src={image} />
              </div>
            <div className="w-[70%]">
              {/* Input  */}
              <div className="w-full flex flex-col lg:flex-row gap-x-4 px-4 mt-6">
                    <div className="w-full">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Date in stock
                      </label>
                      <input
                        className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                        placeholder={new Date(item.item_created_date).toDateString()}
                        disabled
                      />
                    </div>

                    <div className="w-full mt-3 lg:mt-0">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Date out stock
                      </label>
                      <input
                        className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                        placeholder={`${item.item_amount >= 1
                          ? "null"
                          : `${new Date(item.item_last_modify_date).toDateString()}`
                          }`}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col lg:flex-row gap-x-4 pl-4 pr-4 mt-3 lg:mt-6">
                    <div className="w-full">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Product Name
                      </label>
                      <input
                        className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                        placeholder={item.product.product_name}
                        disabled
                      />
                    </div>

                    <div className="w-full mt-3 lg:mt-0">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Amount of products
                      </label>
                      <input
                        className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                        placeholder={item.item_amount}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col lg:flex-row gap-x-4 pl-4 pr-4 mt-3 lg:mt-6">
                    <div className="w-full">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Size
                      </label>
                      <input
                        className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                        placeholder={item.ColorOnSide.size.size_name}
                        disabled
                      />
                    </div>
                    <div className="w-full mt-3 lg:mt-0">
                      <label className="text-sm md:text-base font-medium text-gray-600">
                        Color
                      </label>
                      <div className="flex">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-md border-4"
                          style={{ backgroundColor: item.ColorOnSide.color.color_name }}
                          ></div>
                        <p className="text-xs md:text-base font-semibold pl-2 py-3">{item.ColorOnSide.color.color_name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full pl-4 pr-4 mt-3 lg:mt-6 ">
                    <div className="w-full flex flex-col lg:flex-row gap-x-4">
                      <div className="w-full">
                        <label className="text-sm md:text-base font-medium text-gray-600">
                          Product Price
                        </label>
                        <input
                          className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                          placeholder={item.product.product_price}
                          disabled
                        />
                      </div>
                      <div className="w-full mt-3 lg:mt-0">
                        <label className="text-sm md:text-base font-medium text-gray-600">
                          Discount
                        </label>
                        <input
                          className="w-full h-8 md:h-10 py-2 pl-1 border-2 border-gray-300 rounded-md"
                          placeholder={`${item.product.product_discount * 100} %`}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="w-full h-11 mt-2 md:mt-4">
                      <button onClick={() => navigate(-1)}
                        className="bg-gray-400 font-bold text-white rounded-lg text-sm px-2 py-1 float-right">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
            </div>
                  
          </div>
        </div>
      </div>
        )
      }
      
    </div>
  );
}

export default SeeMore;

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ButtonCancel from "../components/ButtonCancel";
import TextBoxDisplay from "../components/TextBoxDisplay";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import api from "../app/api/apiRoute";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import { setItemArr } from "../app/user/itemArrSlice";

function UpdateProduct() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.value);

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [discount,setDiscount] = useState(0);
  const [loading,setLoading] = useState(false);

  const getAllItem = async () => {
    const res = await axios.get(api.get_all_item);
    dispatch(setItemArr(res.data));
  };


  const handleUpdate = async () => {
    const product_id = item.product.product_id;
    const product_name = name;
    const product_price = price;
    const product_discount = parseFloat(discount)/100;

    console.log(api.update_item)
    setLoading(true);
    const res = await axios.post(api.update_item,{
      product_id,
      product_name,
      product_price,
      product_discount
    },{
      headers : {
        "Content-Type" : "application/json",
      }
    })
 

    if(res.status === 200){
      await getAllItem();
      toast.success("successfully updated");
    } else {
      toast.error("error")
    }
    setLoading(false)
  }

  useEffect(() => {
    setName(item.product.product_name);
    setPrice(item.product.product_price);
    setDiscount(item.product.product_discount);
  },[])

  return (
    <>
    <ToastContainer />
    <div className="w-full h-screen bg-blue-200 lg:pl-4 rounded-l-2xl lg:rounded-l-3xl">
      <div className="w-full flex relative pl-5">
        <h1 className="font-bold text-xl  mr-4 lg:text-3xl py-2 text-primary text-start">
          Product
        </h1>
        <IoIosArrowForward
          className="w-5 lg:w-10 text-lg lg:text-2xl absolute ml-14 lg:ml-4 
        top-3.5 lg:top-4 
        left-10 lg:left-28"
        />
        <h1 className="font-bold text-base lg:text-xl text-primary pl-1 pt-3 lg:pl-3 lg:pt-3.5">
          Update
        </h1>
      </div>
      <div className="w-full sm:h-[80%] flex lg:flex-col bg-bgColor rounded-l-2xl  ">
        <div
          className=" w-full
              sm:pt-3
              sm:px-3 md:px-4 lg:px-5 xl:px-6
              grid 
              sm:gap-y-0 md:gap-y-2 
              gap-x-14 
              grid-rows-2 lg:grid-cols-2
              overflow-y-auto    overflow-x-hidden scrollbar-none  
              scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full
        "
        >
          <div>
            <div className="sm:mb-3 md:mb-4 lg:mb-6">
              <TextBoxDisplay
                textBoxDisplayProp={{
                  labelName: "Date in stock",
                  placeholderName: new Date(
                    item.item_created_date
                  ).toDateString(),
                }}
              />
            </div>

            <div className="sm:mb-3 md:mb-4 lg:mb-6">
              <h3  className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'
                >Product ID</h3>
              <input
                className="w-full
                  border-2 border-gray-400
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1.5"
                  disabled
                  value={item.product.product_id}
              />
            </div>

            <div className="sm:mb-3 md:mb-4 lg:mb-6">
              <h3  className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'
                >Product Price</h3>
              <input
                className="w-full
                  border-2 border-gray-400
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1.5"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div>
          <div className="sm:mb-3 md:mb-4 lg:mb-6">
              <h3  className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'
                >Product Name</h3>
              <input
                className="w-full
                  border-2 border-gray-400
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1.5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sm:mb-3 md:mb-4 lg:mb-6">
              <h3  className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'
                >Discount %</h3>
              <input
                className="w-full
                  border-2 border-gray-400
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1.5"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            {/* <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <DropDownCustom DropDownCustomProp="Category" />
            </div>
            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <DropDownCustom DropDownCustomProp="Size" />
            </div>
            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <DropDownCustom DropDownCustomProp="Discount" />
            </div> */}
            <div
              className="flex justify-between float-right
                              mt-4 lg:mt-20 xl:mt-11
                              pb-4 lg:pb-2
                              w-[30%] md:w-[22%] lg:w-[50%] 2xl:w-[40%]
             "
            >
               <button className="bg-green-400  font-bold text-white rounded-md
                  text-sm  lg:text-base
                  px-3 lg:px-4
                  py-0.5 flex"
                  onClick={handleUpdate}
                  > {
                    loading && <Loading type={"spin"} color={"#FFFFFF"} />
                  }
                    Update
                  </button>
              <ButtonCancel onClick={() => navigate(-1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default UpdateProduct;

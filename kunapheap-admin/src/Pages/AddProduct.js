import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../app/api/apiRoute";
import { setCategory } from "../app/user/categorySlide";
import ButtonAdd from "../components/ButtonAdd";
import ButtonCancel from "../components/ButtonCancel";
import ChooseColor from "../components/ChooseColor";
import DropDownCategory from "../components/DropDownCategory";
import DropdownSize from "../components/DropdownSize";
import InputProduct from "../components/InputProduct";
import UploadImage from "../components/UploadImage";

function AddProduct() {

  const [selectedCategory, setSelectCategory] = useState();
  const [selectedSize, setSelectedSize] = useState("select size");
  const [selectColor, setSelectColor] = useState("#000000");
  const [oneProduct, setOneProduct] = useState({});
  const [amout, setAmout] = useState(0);
  const [image, setImage] = useState();

  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();
  const priceRef = useRef();

  const getAllCategory = async () => {
    const res = await axios.get(api.get_all_category);
    console.log(res.data);
    dispatch(setCategory(res.data));
  };

  const createItem = async (e) => {
    const link = await uploadImage();

    if(selectedCategory === undefined 
      || selectedSize === "select size" 
      || amout === 0 
      || image === undefined
      || oneProduct === undefined ) {
      
        console.log("true")
    } else {
      const data = {
        size_name : selectedSize,
        color_name : selectColor,
        item_amount : amout,
        image_link : link,
        category_id : selectedCategory.category_id,
        product : {
          product_id : oneProduct.product_id,
          product_name : oneProduct.product_name ,
          product_price : oneProduct.product_price   | String(priceRef.current.value) 
        }
      }

      console.log(data)

      
      try{
        const res = await axios.post(api.add_item,data , {
          headers : {
            "Content-Type" : "application/json",
          }
        })
        console.log(res.data)
      }catch(err) {
        console.log(err)
      }
    }
    

  }

  const uploadImage = async () => {
    const data = {
      image : image
    }
    const res = await axios.post(
      api.uplaod_item_image,
      data , {
      headers : {
        "Content-Type" : "multipart/form-data",
      }
    })
    return res.data.link;
  };

  useEffect(() => {
    if (category.length === 0) {
      getAllCategory();
    }
  }, []);

  useEffect(() => {
    if (oneProduct.product_id !== undefined) {
      priceRef.current.disabled = true;
      priceRef.current.value = oneProduct.product_price;
      setSelectCategory(category.filter(item => item.category_id === oneProduct.category_id)[0])
    } else {
      priceRef.current.disabled = false;
    }

  }, [oneProduct]);

  return (
    <div>
      <div className="w-full h-screen bg-blue-200 lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        <h1 className="font-bold text-xl ml-4 lg:text-2xl xl:text-3xl py-1.5 text-primary">
          Add Product
        </h1>
        <div
          className="bg-bgColor 
              h-[80%] md:h-[85%] lg:h-[74%] xl:h-[80%]
              ml-1.5 pt-2 md:pt-4
              xl:pt-3
              rounded-tl-xl 
              px-4 xl:px-7
              overflow-y-auto    overflow-x-hidden scrollbar-none  
              scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full
              grid 
              sm:gap-y-48 md:gap-y-36
              gap-x-14 
              grid-rows-2 lg:grid-cols-2"
        >
          <div>
            <UploadImage setImage={setImage} />
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <label className="text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-500">
                Product ID
              </label>
              <input
                className="w-full 
                  border-2 border-gray-300
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1"
                disabled
                type="text"
                placeholder={oneProduct.product_id}
              />
            </div>

            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <label className="text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-500">
                Product Price
              </label>
              <input
                className="w-full
                  border-2 border-gray-300
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1"
                type="text"
                ref={priceRef}
              />
            </div>

            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <ChooseColor
                setSelectColor={setSelectColor}
                selectColor={selectColor}
              />
            </div>
          </div>

          <div>
            <DropDownCategory
              category={category}
              setSelectCategory={setSelectCategory}
              selectedCategory={selectedCategory}
              oneProduct={oneProduct}
            />
            <InputProduct setOneProduct={setOneProduct} setSelectCategory={setSelectCategory} />
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <label className="text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-500">
                Product Amout
              </label>
              <input
                className="w-full 
                  border-2 border-gray-300
                  placeholder:italic placeholder:font-normal placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base 
                  focus:outline-gray-500 focus:border-1 focus:border-gray-600 focus:ring-1
                  font-normal text-base lg:text-lg text-gray-600
                  rounded-md 
                  py-0.5 pl-1 xl:py-1"
                type="text"
                placeholder="type amout"
                value={amout}
                onChange={(e) => setAmout(e.target.value)}
              />
            </div>
            <DropdownSize
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />

            <div
              className="flex justify-between float-right
                            mt-4 lg:mt-28  
                            pb-4 lg:pb-2
                            w-[30%] lg:w-[50%]"
            >
              <button
                className="bg-green-400 font-bold text-white rounded-md 
                text-sm lg:text-base
                px-6 lg:px-7
                py-0.5 "
                onClick={createItem}
              >
                Add
              </button>
              <ButtonCancel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../app/api/apiRoute';
import { setProduct } from '../app/user/productSlide';

function InputProduct({setOneProduct,setSelectCategory}) {

    const [typedProduct,setTypedProduct] = useState("");
    const [productMatch, setProductMatch] = useState([]);
    const [toggleList,setToggleList] = useState(false)

    const product = useSelector((state) => state.product.value);
    const category = useSelector(state => state.category.value)

    const dispatch = useDispatch();

    

    const handleSelect = (product) => {
        setTypedProduct(product.product_name)
        setToggleList(false)
        setOneProduct(product)
    }



    useEffect(() => {
        if(typedProduct.length > 1) {
            setProductMatch(product.filter(item => item.product_name.toLowerCase().includes(typedProduct.toLowerCase())))
            setToggleList(true)
        } else {
            setToggleList(false)
        }

        if(product.find(item => item.product_name === typedProduct)){
          const filtedproduct = product.filter(item =>  item.product_name !== typedProduct);
          setOneProduct(filtedproduct)
        }else {
          setOneProduct({
            product_name : typedProduct
          })
        }
        
    },[typedProduct])

    

  return (
    <div className="sm:mt-4 lg:mt-6 xl:mt-10 relative">
              <label className="text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-500">
                Product Name
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
                placeholder="type name"
                onChange={e => setTypedProduct(e.target.value) }
                value={typedProduct} 
              />
              <div className="absolute z-10 w-full  top-18 left-0 h-8">
                {
                   toggleList &&
                  <ul className="bg-white ">
                  {productMatch.map((item, index) => (
                    <li className="py-1 font-semibold hover:bg-blue-100 rounded-lg"
                    onClick={() => handleSelect(item)}
                    key={index}
                    >{item.product_name}</li>
                  ))}
                </ul>
                }
              </div>
            </div>
  )
}

export default InputProduct
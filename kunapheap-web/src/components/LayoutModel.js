import axios from 'axios';
import React, { useEffect, useState } from 'react'

import model2 from "../assets/model2.png";

function LayoutModel({product}) {

  const [myFilter,setMyFilter] = useState([])

  const filtered = () => {

    const arr = [...product.item];
    var arr2 = [];
    for(let i=0;i<arr.length;i++) {
      console.log(arr[i].ColorOnSide.color,i)
      arr2 = [...arr2,arr[i].ColorOnSide.color.color_name]
    };

    const arr3 = arr2.filter((value, index, arr) => {
        return arr.indexOf(value) === index;
    })

    setMyFilter([...arr3])

  }

  useEffect(()=> {
    filtered()
  },[])

  return (
    <div>
      <div className='w-full shadow-lg p-2 gap-y-3 flex justify-center flex-col hover:-translate-y-2 hover:shadow-xl'>
        <img src={product.image[0].image_link} className='object-cover h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 px-10'></img>
        <div className='lg:p-2 lg:pt-1'>
          <p className='text-secondary'>$ {product.product_price} </p>
          <div className='flex gap-x-1'>
            {
              myFilter.map((colors,index)=>(<div key={index}  className={`w-4 h-4`} 
              style={{backgroundColor : colors }}>
              </div>))
            }
          </div>
          <p className='text-primary'>{product.product_name}</p>
        </div>
      </div>

    </div>
  )
}

export default LayoutModel
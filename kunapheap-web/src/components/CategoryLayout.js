import React, { useEffect } from "react";

import Slider from "react-slick";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setCategory} from '../app/slice/categorySlice'
import api from "../app/api/apiRoute";

function CategoryLayout() {

  const category = useSelector(state => state.category.value)
  const dispatch = useDispatch()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getCategory = async () =>{
   const res = await axios.get(api.getAllCategory);
   dispatch(setCategory(res.data))
   
  } 

  useEffect(() => {
    if(category.length === 0){
      getCategory();
    }
  })


  return (
    <>
      <div className="w-[90%] mx-auto mb-5">
        <h1 className="text-2xl font-bold mb-5">Top Category </h1>
        <Slider {...settings} >
          {category.length !== 0 && category?.map((item,index) => (
            <div className="border" key={index}>
              <img src={item.product[0].image[0].image_link} className="object-contain w-52 h-48 mx-auto" alt=''  key={item.category_id}/>
              <p className="text-2xl font-semibold  text-center bg-white px-5"> {item.category_name}</p>
            </div>
          ))}
          {category.length !== 0 && category?.map((item,index) => (
            <div className="border" key={index}>
              <img src={item.product[0].image[0].image_link} className="object-contain w-52 h-48 mx-auto" alt="" key={item.category_id}/>
              <p className="text-2xl font-semibold  text-center bg-white px-5"> {item.category_name}</p>
            </div>
          ))}
          {category.length !== 0 && category?.map((item,index) => (
            <div className="border" key={index}>
              <img src={item.product[0].image[0].image_link} className="object-contain w-52 h-48 mx-auto" alt=""  key={item.category_id}/>
              <p className="text-2xl font-semibold  text-center bg-white px-5"> {item.category_name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "fixed",
        position: "absolute",
        right: 0,
        backgroundColor: "#2B2B2B",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "fixed",
        position: "absolute",
        left: 0,
        zIndex: 10,
        paddingTop: "2px",
        backgroundColor: "#2B2B2B",
      }}
      onClick={onClick}
    />
  );
}

export default CategoryLayout;

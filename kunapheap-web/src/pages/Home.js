import React from "react";

import Footer from "../components/Footer";
import LayoutModel from "../components/LayoutModel";
import EditProfile from "./EditProfile";

import model2 from '../assets/model2.png'
import model3 from '../assets/model3.png'
import model4 from '../assets/model4.png'
import model5 from '../assets/model5.png'
function Home() {

  const data = [
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product1"
    },
    {
      image: model3,
      price: 12.432,
      color: [
        { colorName: "green" },
        { colorName: "black" },
        { colorName: "yellow" },
      ],
      name: "product2"
    },
    {
      image: model4,
      price: 12.433, color: [
        { colorName: "blue" },
        { colorName: "black" },
        { colorName: "yellow" },
        { colorName: "orange" },
        { colorName: "green" },
      ],
      name: "product3"
    },
    {
      image: model5,
      price: 12.433, color: [
        { colorName: "blue" },
        { colorName: "black" },
        { colorName: "yellow" },
      ],
      name: "product4"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product5"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product6"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product7"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product8"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product9"
    },
    {
      image: model2,
      price: 12.43,
      color: [
        { colorName: "green" },
        { colorName: "red" },
        { colorName: "yellow" },
      ],
      name: "product9"
    },
  ]

  return (
    <div>
      <div className="justify-center items-center grid grid-cols-1 p-10 md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-6 lg:px-16 lg:gap-y-8">
        
        {
          data.map((item,index)=>(<LayoutModel item={item} key={index}/>))
        }
        
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;

import produce from "immer";
import React, { useEffect, useState } from "react";
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import { GrFormDown } from 'react-icons/gr'
import { useNavigate } from "react-router-dom";
function ProductList() {

  const navigate = useNavigate()
  const [category,setCategory] = useState(false)
  // const data = [
  //   {
  //     id: 1001,
  //     name: "product1",
  //     color: "Green",
  //     size: "M",
  //     price: "$123.12",
  //     amount: 12,
  //     stock_status: "Available",
  //   },
  //   {
  //     id: 1002,
  //     name: "product2",
  //     color: "Red",
  //     size: "S",
  //     price: "$23.12",
  //     amount: 24,
  //     stock_status: "Available",
  //   },
  //   {
  //     id: 1003,
  //     name: "product3",
  //     color: "Black",
  //     size: "L",
  //     price: "$33.12",
  //     amount: 2,
  //     stock_status: "Low stock",
  //   },
  //   {
  //     id: 1004,
  //     name: "product4",
  //     color: "Pink",
  //     size: "XL",
  //     price: "$43.12",
  //     amount: 0,
  //     stock_status: "Out stock",
  //   },
  //   {
  //     id: 1005,
  //     name: "product4",
  //     color: "Pink",
  //     size: "XL",
  //     price: "$43.12",
  //     amount: 1,
  //     stock_status: "Out stock",
  //   },
  //   {
  //     id: 1004,
  //     name: "product4",
  //     color: "Pink",
  //     size: "XL",
  //     price: "$43.12",
  //     amount: 12,
  //     stock_status: "Out stock",
  //   }
  // ]

  const data = [
    1,2,3,4,5,6,7,8
    ,9,10,11,12,13,
    14,15,16,17,18,
    19,20,21,22,23,24,
    25,26,27,28,29,30,
    31,32,33,34,35,36
  ]

  function handleStockStatus(amount) {
    if (amount < 1) {
      return { status: "Out of stock", bgcolor: "#FF8B8B", colorText: "#AF2626" }
    } else if (amount < 4) {
      return { status: "Low stock", bgcolor: "#FFA353", colorText: "#AF2626" }
    } else {
      return { status: "Available", bgcolor: "#57FB6B", colorText: "#098C19" }
    }
  }

  useEffect(
    () => {
      console.log(handleStockStatus(0))
    }, []
  )

  return (
    <div >
      <div className="w-full h-screen bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">

        <div className="w-full flex justify-between pr-4">
          <h1 className="font-bold text-xl ml-4 lg:text-3xl py-2 text-primary">Product List</h1>

          <div className="w-32 flex items-center relative">
            <button onClick={()=>{
              setCategory(!category)
            }}
             className="w-full h-8 py-0.5 pl-3 bg-white text-xl font-semibold text-start align-middle relative rounded-2xl text-blue-500">Category
              <GrFormDown className="absolute right-2 top-2 " />
            </button>
            
            {
              category &&  (
                <div className="w-full h-32 absolute top-12 left-0 bg-white border-2 border-blue-500 rounded-2xl overflow-x-auto 
                                scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full">
                <ul className=" rounded-xl text-lg font-medium text-slate-600 ">
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat
                  </li>
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat1
                  </li> 
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat1
                  </li> 
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat
                  </li>
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat1
                  </li> 
                  <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100">
                    Hat1
                  </li>
                  <li className="pl-2 hover:bg-blue-100">
                    Hat2
                  </li>
                </ul>
              </div>
              )
            }
          </div>
        </div>

        <div className="w-full h-full bg-white lg:rounded-l-2xl overflow-auto">
          <table className="w-full ">
            <thead>
              <tr className="text-sm lg:text-xl text-slate-700 ">
                <th className="w-[10%]">ID</th>
                <th className="w-[10%]">Name</th>
                <th className="w-[10%]">Color</th>
                <th className="w-[10%]">Size</th>
                <th className="hidden md:table-cell w-[10%]">Price</th>
                <th className="w-[10%]">Amount</th>
                <th className="hidden md:table-cell w-[10%]">Stock status</th>
                <th className="w-[10%]">Action</th>
                <th className="w-[10%]">Detail</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => ((
                  <tr key={index} className="text-xs lg:text-lg text-center border-b-2 border-slate-200">
                    <td className="w-[10%] py-5">{item.id}</td>
                    <td className="w-[10%]">{item.name}</td>
                    <td className="w-[10%]">{item.color}</td>
                    <td className="w-[10%]">{item.size}</td>
                    <td className="hidden md:table-cell w-[10%]">{item.price}</td>
                    <td className="w-[10%]">{item.amount}</td>
                    <td className="hidden md:table-cell w-[10%]">
                      <button className="w-[90%] text-lg bg-green-300 font-medium rounded-full "
                        style={{
                          backgroundColor: handleStockStatus(item.amount).bgcolor,
                          color: handleStockStatus(item.amount).colorText
                        }}>
                        {handleStockStatus(item.amount).status}</button>
                    </td>
                    <td className="w-[10%] text-center px-3 lg:px-11 align-middle">
                      <FaRegEdit className="text-xs lg:text-lg float-left text-green-700 font-bold" />
                      <FaTrash className="text-xs lg:text-base float-right text-red-600" />
                    </td>
                    <td className="w-[10%]">
                      <button onClick={() => { navigate("/SeeMore") }}
                        className="w-[90%] px-2 bg-blue-300 text-xs font-normal lg:text-lg text-blue-700 lg:font-medium rounded-full">More</button>
                    </td>
                  </tr>
                )))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

export default ProductList;

import axios from "axios";
import produce from "immer";
import React, { useEffect, useState } from "react";
import { FaTrash, FaRegEdit, FaAws } from "react-icons/fa";
import { GrFormDown } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import api from "../app/api/apiRoute";
function ProductList() {
  const navigate = useNavigate();
  const [toggleCategory, setToggleCategory] = useState(false);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([1, 2, 3]);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  function handleStockStatus(amount) {
    if (amount < 1) {
      return {
        status: "Out of stock",
        bgcolor: "#FF8B8B",
        colorText: "#AF2626",
      };
    } else if (amount < 4) {
      return { status: "Low stock", bgcolor: "#FFA353", colorText: "#AF2626" };
    } else {
      return { status: "Available", bgcolor: "#57FB6B", colorText: "#098C19" };
    }
  }

  const getAllItem = async () => {
    const res = await axios.get(api.get_all_item);
    console.log(res.data);
    setItems(res.data);
  };

  const getAllCategory = async () => {
    const res = await axios.get(api.get_all_category);
    console.log(res.data)
    setCategory(res.data)
  }

  useEffect(() => {
    getAllItem();
    getAllCategory();
  }, []);

  return (
    <div>
      <div className="w-full h-screen bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        <div className="w-full flex justify-between pr-2">
          <h1 className="w-[70%] font-bold text-xl ml-4 md:w-[80%] lg:text-3xl py-2 text-primary">
            Product List
          </h1>

          <div className="w-[28%] md:w-[14%] lg:w-[15%] 2xl:w-[10%] relative z-10">
            <div className="w-full relative mt-1">
              <button
                onClick={() => {
                  setToggleCategory(!toggleCategory);
                }}
                className="w-full text-sm text-start font-semibold align-middle py-1 pl-2
                md:pl-4 lg:py-0 lg:text-lg bg-white rounded-full text-blue-500 absolute right-0 top-1"
              >
                Category
                <GrFormDown className="absolute text-base lg:text-xl right-3 top-2 lg:right-2 lg:top-1" />
              </button>
            </div>

            {toggleCategory && (
              <div
                className="w-full lg:w-full h-32 absolute top-11 lg:top-12 left-0 bg-white border-2 border-blue-500 rounded-2xl 
                                overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full"
              >
                <ul className=" rounded-xl text-base font-medium text-slate-600 ">
                  {category?.map((item, index) => (
                    <li className="border-b-2 pl-2 border-slate-300 hover:bg-blue-100" key={index}>
                      {item.category_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-full bg-white lg:rounded-l-2xl overflow-auto">
          <table className="w-full ">
            <thead className="sticky top-0 bg-bgColor">
              <tr className="text-sm lg:text-lg text-slate-700 ">
                <th className="w-[10%]">ID</th>
                <th className="w-[25%] text-left">Name</th>
                <th className="w-[5%]">Color</th>
                <th className="w-[5%]">Size</th>
                <th className="hidden md:table-cell w-[5%]">Price</th>
                <th className="w-[10%]">Amount</th>
                <th className="hidden md:table-cell lg:w-[16%] w-[10%]">
                  Stock status
                </th>
                <th className="w-[10%]">Action</th>
                <th className="w-[10%]">Detail</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className="text-xs lg:text-base font-semibold text-center border-b-2 border-slate-200"
                >
                  <td className="w-[10%] py-3">{index + 1}</td>
                  <td className="w-[25%] text-left">
                    {item.product.product_name}
                  </td>
                  <td className="w-[5%]">
                    {item.ColorOnSide.color.color_name}
                  </td>
                  <td className="w-[5%]">{item.ColorOnSide.size.size_name}</td>
                  <td className="hidden md:table-cell w-[5%]">
                    {item.product.product_price}
                  </td>
                  <td className="w-[10%]">{item.item_amount}</td>
                  <td className="hidden md:table-cell w-[10%]">
                    <button
                      className="w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] text-sm lg:text-base bg-green-300 font-medium rounded-full "
                      style={{
                        backgroundColor: handleStockStatus(item.item_amount)
                          .bgcolor,
                        color: handleStockStatus(item.item_amount).colorText,
                      }}
                    >
                      {handleStockStatus(item.item_amount).status}
                    </button>
                  </td>
                  <td className="w-[10%] text-center px-3 md:px-8 lg:px-5 xl:px-8 align-middle">
                    <FaRegEdit className="text-xs lg:text-lg float-left text-green-700 font-bold" />
                    <FaTrash className="text-xs lg:text-base float-right text-red-600" />
                  </td>
                  <td className="w-[10%]">
                    <button
                      onClick={() => {
                        navigate("/SeeMore");
                      }}
                      className="w-[90%] px-2 bg-blue-300 text-xs font-medium lg:text-base lg:px-3 text-blue-700 lg:font-medium rounded-full"
                    >
                      More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

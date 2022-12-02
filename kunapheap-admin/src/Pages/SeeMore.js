import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function SeeMore() {

  const [text,setText] = useState('Bart')
  
  return (

    <div>
      <div className="w-full bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        {/* Tittle Product>See more */}
        <div className="w-full flex relative">
          <h1 className="font-bold text-xl ml-4 lg:text-3xl py-2 text-primary">
            Product List{" "}
          </h1>
          <IoIosArrowForward className="w-5 lg:w-10 text-lg lg:text-2xl absolute left-32 top-4 lg:left-44" />
          <h1 className="font-bold text-base lg:text-xl text-primary pl-5 pt-3 lg:pl-6 lg:pt-4">
            See more
          </h1>
        </div>

        <div className="w-full h-screen bg-bgColor rounded-l-2xl ">
          <div className=" w-full overflow-auto flex-col lg:flex-row h-[80%] 
          scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-full">
            {/* Image */}

            <img src="" className="w-full h-52 bg-secondary mt-6"></img>

            <div className="w-full">
              {/* Input  */}
              <div className="w-full flex flex-col lg:flex-row gap-x-4 pl-4 pr-4 mt-6">
                <div className="w-full">
                  <label className="text-lg font-medium text-primary w-full">
                    Date in stock
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder={text}
                    disabled
                  />
                </div>

                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Date out stock
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row  gap-x-4 pl-4 pr-4 mt-6">
                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Product Name
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>

                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Amount of products
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row gap-x-4 pl-4 pr-4 mt-6">
                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Size
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>
                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Color
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>
              </div>

              <div className="w-full flex  gap-x-4 pl-4 pr-4 mt-6">
                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Product Price
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                </div>
                <div className="w-full">
                  <label className="text-lg font-medium text-primary">
                    Discount
                  </label>
                  <input
                    className="w-full py-2 pl-1  border-2 border-gray-300 rounded-md"
                    placeholder="Hello1"
                  />
                  <button className="bg-slate-400 text-white rounded-lg px-3 py-1 float-right mt-2">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;

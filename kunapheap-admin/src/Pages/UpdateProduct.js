import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import ButtonUpdate from "../components/ButtonUpdate";
import ButtonCancel from "../components/ButtonCancel";  
import TextBoxDate from "../components/TextBoxDate";
import TextBoxDisplay from '../components/TextBoxDisplay';  
import { useNavigate } from "react-router-dom";


function UpdateProduct() {

  const navigate = useNavigate() 

  return (
    <div className="w-full h-screen bg-blue-200 lg:pl-4 rounded-l-2xl lg:rounded-l-3xl">
      <div className="w-full flex relative pl-5">
        <h1 className="font-bold text-xl  mr-4 lg:text-3xl py-2 text-primary text-start">
          Product
        </h1>
        <IoIosArrowForward className="w-5 lg:w-10 text-lg lg:text-2xl absolute ml-14 lg:ml-4 
        top-3.5 lg:top-4 
        left-10 lg:left-28" />
        <h1 className="font-bold text-base lg:text-xl text-primary pl-1 pt-3 lg:pl-3 lg:pt-3.5">
          Update
        </h1>
      </div>
      <div className='w-full sm:h-[80%] flex lg:flex-col bg-bgColor rounded-l-2xl  '>
        <div className=' w-full
              sm:pt-3
              sm:px-3 md:px-4 lg:px-5 xl:px-6
              grid 
              sm:gap-y-0 md:gap-y-2 
              gap-x-14 
              grid-rows-2 lg:grid-cols-2
              overflow-y-auto    overflow-x-hidden scrollbar-none  
              scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full
        '>
          <div>
            <div className='sm:mb-3 md:mb-4 lg:mb-6' >
              <TextBoxDisplay textBoxDisplayProp={{
                labelName: "Date in stock",
                placeholderName: "Hi hi hi"
              }} />
            </div>

            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <TextBoxDisplay textBoxDisplayProp={{
                labelName: "Product ID",
                placeholderName: "Hi hi hi"
              }} />
            </div>

            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <TextBoxDisplay textBoxDisplayProp={{
                labelName: "Product Price",
                placeholderName: "Hi hi hi"
              }} />
            </div>

            <div>
              <div className='sm:mb-3 md:mb-4 lg:mb-6'>
                <TextBoxDisplay textBoxDisplayProp={{
                  labelName: "Product Color",
                  placeholderName: "Hi hi hi"
                }} />
              </div>
            </div>
          </div>

          <div>
            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <TextBoxDate textBoxPropDate="Date out stock" />
            </div>
            <div className='sm:mb-3 md:mb-4 lg:mb-6'>
              <TextBoxDisplay textBoxDisplayProp={{
                labelName: "Product Name",
                placeholderName: "Hi hi hi"
              }} />
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
            <div className="flex justify-between float-right
                              mt-4 lg:mt-20 xl:mt-11
                              pb-4 lg:pb-2
                              w-[30%] md:w-[22%] lg:w-[50%] 2xl:w-[40%]
             ">
              <ButtonUpdate />
              <ButtonCancel  onClick={() => navigate(-1)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
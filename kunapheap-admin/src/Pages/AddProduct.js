import React, { useEffect, useState } from "react";
import ButtonAdd from "../components/ButtonAdd";
import ButtonCancel from "../components/ButtonCancel";
import ChooseColor from "../components/ChooseColor";
import DropDownCustom from "../components/DropDownCustom";
import TextBox from "../components/TextBox";
import TextBoxDate from "../components/TextBoxDate";
import UploadImage from "../components/UploadImage";
function AddProduct() {
  // const dropDownCustomProp = {
  //   labelName: [
  //     "Choose category",
  //     "Choose size"
  //   ],
  //   arrayCategory : [
  //     "Bag",
  //     "Belt",
  //     "Dress",
  //     "Pant",
  //     "Shirt",
  //     "Shoes",
  //     "Skirt",
  //     "Suit" 
  //   ], 
  //   sizeOfItem : [
  //     "XS",
  //     "S",
  //     "M",
  //     "L",
  //     "XL"
  //   ],
  //   sizeOfShoes : [
  //     "36",
  //     "37",
  //     "38",
  //     "39",
  //     "40"
  //   ]
  // }
  const [shoes, setShoes] = useState(false)
  const [selectItem, setselectItem] = useState("")
  const [category, setCategory] = useState("")

  const categoryProp = {
    item: "Choose category",
    labelName: "Category",
    list: [
      "Bag",
      "Belt",
      "Dress",
      "Pant",
      "Shirt",
      "Shoes",
      "Skirt",
      "Suit"
    ]
  }

  const size = {
    item: "Choose size",
    labelName: "Size",
    list: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ]
  }

  const sizeOfShoes = {
    labelName: "Size",
    list: [
      "11",
      "12",
      "13",
      "14",
      "15"
    ]
  }

  return (

    <div>
      <div className="w-full h-screen bg-blue-200 lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">

        <h1 className="font-bold text-xl ml-4 lg:text-2xl xl:text-3xl py-1.5 text-primary">Add Product</h1>

        <div className="bg-bgColor 
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
              grid-rows-2 lg:grid-cols-2
        ">
          <div >
            <UploadImage />
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <TextBoxDate textBoxPropDate="Date out stock" />
            </div>
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <TextBox textBoxProp={{
                labelName: "Product ID",
                placeholderName: "Type ID here"
              }} />
            </div>
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <TextBox textBoxProp={{
                labelName: "Product price",
                placeholderName: "Type name here"
              }} />
            </div>

            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              <ChooseColor />
            </div>
          </div>

          <div>
            <DropDownCustom
              dropDownProps={categoryProp}
              selectItem={selectItem}
              setselectItem={setselectItem}
              setShoes={setShoes}
            />
            <div className="sm:mt-4 lg:mt-11 xl:mt-11">
              <TextBox textBoxProp={{
                labelName: "Product name",
                placeholderName: "Type name here"
              }} />
            </div>
            <div className="sm:mt-4 lg:mt-6 xl:mt-11 2xl:mt-12">
              <TextBox textBoxProp={{
                labelName: "Product amount",
                placeholderName: "Type amount here"
              }} />
            </div>
            <div className="sm:mt-4 lg:mt-6 xl:mt-10">
              {
                shoes
                  ? <DropDownCustom
                    dropDownProps={sizeOfShoes}
                    selectItem={selectItem}
                    setselectItem={setselectItem}
                    setShoes={setShoes} />
                  : <DropDownCustom
                    dropDownProps={size}
                    selectItem={selectItem}
                    setselectItem={setselectItem}
                    setShoes={setShoes} />
              }

            </div>

            <div className="flex justify-between float-right
                            mt-4 lg:mt-28  
                            pb-4 lg:pb-2
                            w-[30%] lg:w-[50%]
            ">
              <ButtonAdd />
              <ButtonCancel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;

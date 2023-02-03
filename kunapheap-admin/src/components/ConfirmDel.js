import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../app/api/apiRoute";
import { setItemArr } from "../app/user/itemArrSlice";

function ConfirmDel({setToggleDel,item_id,itemArr}) {

    
    const dispatch = useDispatch();

    const handleDelete = async (item_id) => {
        console.log(item_id)
        const res = await axios.delete(api.delete_item+item_id);
        dispatch(setItemArr(itemArr.filter(item => item.id != item_id)))
    }


  return (
    <>
        <div className="absolute w-full h-screen z-40  backdrop-blur-sm" 
            onClick={() => setToggleDel(false)}>
          <div className="block mx-[30%] mt-[10%] w-60 h-36 rounded-md border-2 border-red-400 bg-white z-50">
            <p className="text-xl font-semibold px-10 text-center">
              Are you sure ?{" "}
            </p>
            <div className="mt-10 flex justify-around">
              <button className="bg-red-500 p-1 px-2 rounded-lg"
              onClick={() => handleDelete(item_id )}
              >Delete</button>
              <button
              onClick={() => setToggleDel(false)}
               className="bg-gray-400 p-1 px-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default ConfirmDel;

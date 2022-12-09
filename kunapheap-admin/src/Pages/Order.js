import React, { useEffect, useState } from "react";
import { GrFormDown } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
function Order() {

  const data = [
    {
      no: 1,
      productID: 1001,
      cusTel: "012 168 168",
      cusName: "CuteGirl",
      dateOrder: "22/April/2022",
      statusOrder: "Order"
    },
    {
      no: 2,
      productID: 1002,
      cusTel: "0122 168 168",
      cusName: "CuteGirl2",
      dateOrder: "222/April/2022",
      statusOrder: "Order2"
    },
    {
      no: 3,
      productID: 1003,
      cusTel: "013 168 168",
      cusName: "CuteGirl3",
      dateOrder: "23/April/2022",
      statusOrder: "Order3"
    },
    {
      no: 4,
      productID: 1004,
      cusTel: "014 168 168",
      cusName: "CuteGirl4",
      dateOrder: "24/April/2022",
      statusOrder: "Order4"
    },
    {
      no: 5,
      productID: 1005,
      cusTel: "015 168 168",
      cusName: "CuteGirl5",
      dateOrder: "25/April/2022",
      statusOrder: "Order5"
    }
  ]
  return (
    <div>
      <div className="w-full h-screen bg-blue-200  lg:pl-6 rounded-l-2xl lg:rounded-l-3xl">
        <h1 className="font-bold text-xl ml-4 lg:text-3xl py-2 text-primary">Order</h1>
        <div className="w-full h-full bg-white lg:rounded-l-2xl overflow-auto">
          <table className="w-full">
            <thead className="sticky">
              <tr className="text-xs lg:text-lg text-slate-700">
                <th className="w-[3%] lg:w-[5%] xl:w[10%]">No</th>
                <th className="w-[17%] md:w-[18%] lg:w-[15%] ">Customer Tel</th>
                <th className="w-[20%] md:w-[18%] lg:w-[15%] ">Customer Name</th>
                <th className="hidden md:table-cell w-[10%] ">Date</th>
                <th className="w-[8%] xl:w[10%]">Status</th>
                <th className="w-[10%]">Detail</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => (
                  <tr key={index} className="text-xs lg:text-base text-center border-b-2 border-slate-200">
                    <td className="w-[10%] py-3">{item.no}</td>
                    <td className="w-[10%] ">{item.cusTel}</td>
                    <td className="w-[10%]">{item.cusName}</td>
                    <td className="w-[10%] hidden md:table-cell">{item.dateOrder}</td>
                    <td className="w-[10%] relative">
                      <OrderedCompleted />
                    </td>
                    <td className="w-[10%] relative">
                      <SeeMore />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SeeMore() {
  const navigate = useNavigate();

  return (<>
    <button onClick={() => { navigate("/SeeMoreOrder") }}
      className="bg-blue-300 text-blue-700 px-3 py-1 md:px-4 text-xs lg:py-1 lg:px-4 lg:text-base font-semibold rounded-full">
      More
    </button>
  </>)
}

function OrderedCompleted() {
  const [show, setShow] = useState(false)
  const [status, setStatuse] = useState("Ordered")
  return (
    <>
      <div >
        <button onClick={() => { setShow(!show) }}
          className={`w-20 py-1 px-2 text-xs font-semibold text-start lg:px-4 lg:py-1 lg:w-28 lg:text-base xl:w-28 xl:text-base relative rounded-full
          ${status === 'Ordered' ? "bg-orange-400 text-orange-700" : "bg-green-400 text-green-800"}
          ${status == 'Ordered' ? "pl-3 2xl:pl-4" : "md:pl-2 lg:pl-2 2xl:pl-3"}
          `}
        >{status}
          <GrFormDown className="absolute text-base right-1 top-1 lg:text-xl lg:right-2 lg:top-2 xl:right-2" />
        </button>
        {
          show &&
          <div className="absolute right-1 top-9 md:right-2 lg:right-3 lg:top-11 xl:right-4 2xl:right-8 border-2 border-blue-400 rounded-2xl bg-white z-10">
            <ul className="w-20 lg:w-28 text-sm lg:text-lg font-semibold text-center cursor-pointer">
              <li onClick={() => {
                setStatuse("Ordered")
                setShow(!show)
              }}
                className="w-full border-b-2 border-blue-400 hover:bg-blue-100 rounded-t-2xl text-gray-500">Ordered</li>
              <li onClick={() => {
                setStatuse("Complete")
                setShow(!show)
              }}
                className="w-full border-b-2 hover:bg-blue-100 rounded-b-2xl text-gray-500">Complete</li>
            </ul>
          </div>
        }
      </div>
    </>
  )
}
export default Order;

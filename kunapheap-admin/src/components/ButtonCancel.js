import React from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ButtonCancel() {

  const notify = () => {
    toast("Wow so easy!");
  } 
  return (
    <div>
      <button
      onClick={notify}
       className="bg-gray-400 font-bold text-white rounded-md
       text-sm  lg:text-base
       px-3 lg:px-4
       py-0.5">
        Cancel
      </button>
    </div>
  )
}

export default ButtonCancel
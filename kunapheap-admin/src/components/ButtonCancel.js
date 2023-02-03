import React from 'react'
import { useNavigate } from 'react-router-dom'


function ButtonCancel() {

  const navigate = useNavigate()

  return (
    <div>
      <button
      onClick={() => navigate(-1)}
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
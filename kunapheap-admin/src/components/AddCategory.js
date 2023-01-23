import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useState } from 'react'
import api from '../app/api/apiRoute'
import {BiLoaderCircle} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../app/user/categorySlide'

function AddCategory() {

    const [toggleInput,setToggleInput] = useState(false)
    const [input,setInput] = useState("")
    const [loading,setLoading] = useState(false)

    const category = useSelector(state => state.category.value)
    const dispatch = useDispatch()

    const handleAddCategory = async () => {

        setLoading(true);
        const res = await axios.post(api.add_category,data = {
            
            "category_name" : input
        },
        {
            'content-type': 'text/json'
        })
        setLoading(false)

        if(res.status == 201){
           dispatch(setCategory([...category,res.data.category]))
        }
    }

  return (

    <>
        <div 
            className='w-full pl-3 py-1 border-b-2 border-slate-300 hover:bg-gray-200 text-center'
         >
            {
                toggleInput && 
                <input 
                className='w-full border-2 border-black rounded-lg' 
                value={input}
                onChange={e => setInput(e.target.value) } />
            }
            {
                toggleInput ? 
                <div className='text-right'>
                <button 
                className='bg-green-400 px-8 m-1 rounded-lg relative'
                onClick={handleAddCategory}
                >
                    {
                        loading && 
                        <BiLoaderCircle className={`absolute left-2 top-0.5 text-xl text-white border-slate-400 animate-spin `} />
                    }
                    
                    Add
                </button>
                <button
                 className='bg-red-400 px-4 m-1 rounded-lg'
                 onClick={() => setToggleInput(false)} >
                    Cancel
                </button>
                </div>
                :
                <button className='w-full text-blue-500'
                onClick={() => setToggleInput(!toggleInput)}
                >
                    Add Category
                </button>
            }
            
            
        </div>
    </>
  )
}

export default AddCategory
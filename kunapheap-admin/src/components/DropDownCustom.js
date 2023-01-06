import React, {useEffect , useState} from 'react' 
import { GrFormDown } from 'react-icons/gr' 
function DropDownCustom({dropDownProps, setselectItem, selectItem, setShoes}) {
  const [showDrop, setShowDrop] = useState(false)
  const [category, setCategory] = useState("")
  
  const getCategory = () =>{
    setselectItem(category)
    if(category === "Shoes"){
      setShoes(false)
    }else{
      setShoes(true)
    }
    console.log(selectItem)
  }

  return (
    <> 
      <div >
        <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'>{dropDownProps.labelName}</label>
        <div className="w-full relative mt-0.5">
          <button
            className="w-full bg-blue-400 text-start 
            font-medium 
            text-base xl:text-lg
            pl-2 
            h-8 xl:h-10 rounded-lg"
            onClick={() => { setShowDrop(!showDrop) }}
          >{category==="" ? dropDownProps.item : category}</button> 
          <GrFormDown
            className={`absolute rotate-180
                        text-xl  
                        top-1.5 xl:top-2.5 
                        right-2 xl:right-2.5
              ${showDrop === true ? "rotate-180" : "rotate-1"}
            `} />
        </div>
        {
            showDrop &&
          (
            <div className="w-full mt-2">
              <ul className="w-full h-52 bg-white rounded-xl text-base font-medium border-solid border-4 border-sky-500
                        overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full">
                {
                   dropDownProps.list.map((item, index) => (
                    <li
                     key={index} 
                     className="pl-3 py-1 border-b-2 border-slate-300 hover:bg-gray-200"
                     onClick={()=>{setCategory(item); console.log(item); setShowDrop(!showDrop); getCategory()}} 
                    >{item}</li>
                  ))  
                }
              </ul>
            </div>
          )
        }
      </div>
    </>
  )
}

export default DropDownCustom
import React, {useEffect , useState} from 'react' 
import { GrFormDown } from 'react-icons/gr' 
import AddCategory from './AddCategory'


function DropDownCategory({category,setSelectCategory}) {

  const [showDrop, setShowDrop] = useState(false)
  const [categoryText,setCategoryText] = useState("select category")

  useEffect(() => {

  },[category])

  return (
    <> 
      <div >
        <label className='text-base font-medium pl-1 lg:text-lg xl:text-xl text-gray-700'>
          Category
          </label>
        <div className="w-full mt-0.5 relative">
          <button
            className="w-full bg-blue-400 text-start 
            font-medium 
            text-base xl:text-lg
            pl-2 
            h-8 xl:h-10 rounded-lg"
            onClick={() => { setShowDrop(!showDrop) }}
          >{categoryText}</button> 
          <GrFormDown
            className={`absolute rotate-180
                        text-xl  
                        top-1.5 xl:top-2.5 
                        right-2 xl:right-2.5
              ${showDrop === true ? "rotate-180" : "rotate-1"}
            `}/>
            {
            showDrop &&
          (
            <div className="w-full mt-2 z-20 absolute">
              <ul className="w-full h-52 bg-white rounded-xl text-base font-medium border-solid border-4 border-sky-500
                        overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full">
                {
                   category.map((item, index) => (
                    <li
                     key={index} 
                     className="pl-3 py-1 border-b-2 border-slate-300 hover:bg-gray-200"
                     onClick={() =>{
                      setSelectCategory(item);
                      setCategoryText(item.category_name)
                      setShowDrop(!showDrop)
                     } }
                    >{item.category_name}
                    </li>
                  )) 
                }
                <li>
                  <AddCategory />
                </li>
              </ul>
            </div>
          )
        }
        </div>
        
      </div>
    </>
  )
}

export default DropDownCategory
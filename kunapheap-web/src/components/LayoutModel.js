import React from 'react'
import model2 from '../assets/model2.png'

function LayoutModel({item}) {
  
  return (
    <div>
      <div className='w-full shadow-lg p-2 gap-y-3 flex justify-center flex-col hover:-translate-y-2 hover:shadow-xl'>
        <img src={item.image} className='object-cover h-80 px-10'></img>

        <div className='lg:p-2 lg:pt-1'>
          <p className='text-secondary'>${item.price}</p>
          <div className='flex gap-x-1'>
            {
              item.color.map((item,index)=>(<div key={index}  className={`w-4 h-4 ${item.colorName}`} 
              style={{background: item.colorName}}>
              </div>))
            }
            
          </div>
          <p className='text-primary'>{item.name}</p>
        </div>
      </div>

    </div>
  )
}

export default LayoutModel
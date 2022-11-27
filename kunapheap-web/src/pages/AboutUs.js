import React from 'react'
import bannerPic from '../assets/banner-aboutUs.png'
function AboutUs() {
  return (
    <div className='flex flex-row'>
      <div className='w-[60%] mt-20'>
        <h1 className='pl-10 text-xl lg:pl-40 font-bold lg:text-2xl text-secondary'>
          Who we are?
        </h1>
        <h1 className='pl-12 text-2xl lg:pl-48 font-bold lg:text-3xl text-primary'>
          About Us
        </h1>
        <hr className='ml-11 w-20 lg:ml-48 lg:w-24 h-1 bg-gray-100 rounded border-0 dark:bg-secondary'></hr>
        <p className='ml-11 mt-4 lg:ml-48 lg:mt-4 lg:text-sm text-md'>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames
          ac turpis egestas. Vestibulum volutpat in arcu non rutr. Aliquam eros nulla.
          Sed vel dolor quis urna pellentesque porta get u nunic. Praesent tempor
          bibendum urna, ut congue augue malesuada quisay. Nullam lectus nulla,
          scelerisque ac eleifend nec.
          Tristique nec ipsum. Ut quis ornare erat. Duis et urna sit amet nulla one
          venenatis pharetra. Aenean a cursus purus. Nam accumsan scelerisque orci
          vitae finibus.
        </p>
        <h1 className='pl-12 lg:pl-48 font-bold text-xl lg:text-2xl text-secondary mt-4'>
          Thank you!
        </h1>
      </div>
      <div>
        <img src={bannerPic} className='w-64 mt-20 lg:w-96'></img>
      </div>
    </div>
  )
}

export default AboutUs
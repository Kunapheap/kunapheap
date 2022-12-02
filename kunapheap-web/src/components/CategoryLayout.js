import React from "react";
import image1 from "../assets/model1.png";

function CategoryLayout() {
  const data = [1, 2, 3, 4, 5, 6, 7,8,9,12];

  return (
    <div className="flex p-0 gap-3 overflow-auto snap-mandatory snap-x">
      {data.map((item,index) => (
        <div className="min-w-[20%] ">
          <img src={image1} className="object-cover w-52 h-80" />
          <p className="text-2xl"> Category</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryLayout;

// import React, { Component } from "react";
// import Slider from "react-slick";

// function CategoryLayout() {

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
  
// }

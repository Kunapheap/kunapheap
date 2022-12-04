import React from "react";
import Slider from "react-slick";

import banner1 from "../assets/banner1.png";

function Banner() {
  
  const settings = {
    dots: true,
    infinite: true,
    className: "",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const data = [
    'https://i.picsum.photos/id/428/1000/700.jpg?hmac=V2UsYL6D0t4h8ore2a3hwCT5mocNGYTPSniF420rjUQ',
    'https://i.picsum.photos/id/565/1000/700.jpg?hmac=8pWEsjWfv_By4aWyJ4R699jUhoOGHqOhYKm-Hq2IIgo',
    banner1
  ];

  return (
    <div className="w-full flex justify-center mb-5">
      <div className=" mt-6 w-[96%] md:w-[80%] lg:w-[70%] xl:w-[60%] lg:mt-0">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="" key={index}>
              <img src={item} alt="banner" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "fixed",position: 'absolute', right: 0,backgroundColor: '#2B2B2B',paddingTop: '2px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "fixed",position: 'absolute', left: 0,zIndex: 10,paddingTop: '2px',backgroundColor: '#2B2B2B' }}
      onClick={onClick}
    />
  );
}

export default Banner;

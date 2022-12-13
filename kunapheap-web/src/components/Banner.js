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
    'https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575311.jpg?w=1380&t=st=1670827394~exp=1670827994~hmac=addb59cd75774585c41bafb9493d55a4957eb0ecc2b377ef6210aec0354e9b3b',
    'https://img.freepik.com/free-photo/elegant-asian-woman-white-dress-looking-camera-confident-chinese-woman-hat-holding-leather-jacket_197531-14542.jpg?w=1380&t=st=1670827444~exp=1670828044~hmac=84325fea84c0c9d0dd9d23af6934e6932ef5c42bdebd94052c1ae0c1fca7cec1',
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

import React, { useEffect } from "react";

import Slider from "react-slick";

function ViewProductLayout({item}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mb-5">
        <Slider {...settings}>
          {item.length !== 0 &&
            item?.map((img, index) => (
              <img className="text-center"
               src={img.image[0].image_link} 
               alt="test" key={index} />
            ))}
        </Slider>
      </div>
    </>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "fixed",
        position: "absolute",
        right: 0,
        backgroundColor: "#2B2B2B",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "fixed",
        position: "absolute",
        left: 0,
        zIndex: 10,
        paddingTop: "2px",
        backgroundColor: "#2B2B2B",
      }}
      onClick={onClick}
    />
  ); 
}

export default ViewProductLayout;

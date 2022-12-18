import React from "react";

import Slider from "react-slick";

function ViewProductLayout({image}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

 const data = [1,2,3,4,5,6]

  return (
    <>
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mb-5">
        <Slider {...settings}>
          {data.length !== 0 &&
            data?.map((item, index) => (
              <img className="text-center" src={image} alt="test" key={index} />
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

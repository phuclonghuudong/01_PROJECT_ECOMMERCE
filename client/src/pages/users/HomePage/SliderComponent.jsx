import React from "react";
import { Image } from "antd";
import { SliderDiv, SliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <SliderDiv>
      <SliderStyle {...settings}>
        {arrImages.map((image) => {
          return <Image key={image} src={image} alt="slider" preview={false} width="100%" height="100%" />;
        })}
      </SliderStyle>
    </SliderDiv>
  );
};

export default SliderComponent;

import React from "react";
import SliderComponent from "./SliderComponent";
import SectionServiceComponent from "./SectionServiceComponent";
import slider01 from "../../../assets/slider/slider01.png";
import slider02 from "../../../assets/slider/slider02.png";

const HomePage = () => {
  return (
    <div>
      <SliderComponent arrImages={[slider01, slider02]} />
      <SectionServiceComponent />
    </div>
  );
};

export default HomePage;

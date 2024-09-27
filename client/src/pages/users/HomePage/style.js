import styled from "styled-components";
import Slider from "react-slick";

export const SliderDiv = styled.div`
  border: 0 none;
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
`;
export const SliderStyle = styled(Slider)`
  & .slick-arrow.slick-prev {
    left: 12px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }
  & .slick-arrow.slick-next {
    right: 28px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }
  & .slick-dots {
    z-index: 10;
    bottom: -2px !important;
    li {
      button {
        &::before {
          color: rgb(255, 255, 0.5);
        }
      }
    }
    li.active {
      button {
        &::before {
          color: #fff;
        }
      }
    }
  }
`;
export const TitleSectionService = styled.span`
  font-weight: 500;
  padding-left: 5px;
  text-transform: uppercase;
`;

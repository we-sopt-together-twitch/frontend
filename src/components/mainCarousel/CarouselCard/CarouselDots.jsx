import React from "react";
import styled from "styled-components";
import { displaySize } from "../../../styles/responsive";
import "../Carousel.css";

export function CarouselDots(props) {
  const { slideIndex, setSlideIndex } = props;

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <ContainerDots>
      {Array.from({ length: 4 }).map((item, index) => (
        <div
          key={item}
          onClick={() => moveDot(index + 1)}
          className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
      ))}
    </ContainerDots>
  );
}

const ContainerDots = styled.div`
  position: absolute;
  top: -2.7rem;
  left: 15rem;
  transform: translateX(-50%);
  display: flex;
  ${displaySize("mobile")} {
    display: none;
  }
`;

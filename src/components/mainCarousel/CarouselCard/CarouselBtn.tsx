import React from "react";
import styled from "styled-components";
import leftArrow from "../../../assets/icon/left-arrow.svg";
import rightArrow from "../../../assets/icon/right-arrow.svg";

export function CarouselBtn({ direction, moveSlide }) {
  return (
    <StyledBtn onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </StyledBtn>
  );
}

const StyledBtn = styled.button`
  width: 4.8rem;
  height: 6.3rem;
  position: absolute;
  cursor: pointer;
  padding: 0 !important;
  border: none;

  & > img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

import React, { useState } from "react";
import { CarouselBtn } from "./CarouselBtn";
import { dataCarousel } from "../dataCarousel";
import styled from "styled-components";
import "../Carousel.css";
import { CarouselDots } from "./CarouselDots";
import { CarouselIntro } from "./CarouselIntro";

export function CarouselBox() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataCarousel.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataCarousel.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataCarousel.length);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselDots slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <CarouselContent>
        <CarouselImg>
          {dataCarousel.map((obj, index) => {
            return (
              <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                <img src={process.env.PUBLIC_URL + `/img/sliderImg${index + 1}.png`} />
              </div>
            );
          })}
        </CarouselImg>
        <CarouselIntro data={dataCarousel[slideIndex - 1]} />
        <CarouselBtn moveSlide={nextSlide} direction={"next"} />
        <CarouselBtn moveSlide={prevSlide} direction={"prev"} />
      </CarouselContent>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 47.5rem;
  margin: 5rem auto;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(1, 2, 0, 0.2);
`;

const CarouselContent = styled.div`
  display: flex;
  height: 100%;
  padding: 5rem 7rem;
`;

const CarouselImg = styled.div`
  position: relative;

  width: 58%;
  margin-right: 4rem;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div > img {
    width: 100%;
    height: 100%;
  }
`;

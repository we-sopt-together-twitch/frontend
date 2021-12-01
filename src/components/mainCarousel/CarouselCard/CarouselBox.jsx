import React, { useState, useEffect } from "react";
import { getBanner } from "../../../data/apiService/real/bannerReal";
import { CarouselBtn } from "./CarouselBtn";
import { CarouselDots } from "./CarouselDots";
import { CarouselIntro } from "./CarouselIntro";
import styled from "styled-components";
import "../Carousel.css";

export function CarouselBox() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBanner();
      setBanner(data);
      console.log(data);
    })();
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== banner.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banner.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banner.length);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselDots slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <CarouselContent>
        <CarouselImg>
          {banner &&
            banner.map((obj, index) => {
              return (
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                  <img src={obj.thumbnailImg} />
                </div>
              );
            })}
        </CarouselImg>
        <CarouselIntro data={banner[slideIndex - 1]} />
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

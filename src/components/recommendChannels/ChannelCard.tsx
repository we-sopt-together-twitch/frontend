import React from "react";
import styled from "styled-components";
import { ReactComponent as Thumbnail } from "../../assets/icon/sona.svg";

export const ChannelCard = ({ title, broadcast, subscribe }) => {
  return (
    <StyledChannelCard>
      <div className="gradient"></div>
      <ThumbnailWrapper>
        <Thumbnail />
      </ThumbnailWrapper>
      <MainContents>
        <Title>{title}</Title>
        <Broadcast>{broadcast} 방송 중</Broadcast>
      </MainContents>
      <SubContents>
        <ChannelIcon />
        <Subscribe>{subscribe} 명 구독</Subscribe>
      </SubContents>
    </StyledChannelCard>
  );
};

const StyledChannelCard = styled.div`
  width: 100%;
  padding-top: 137.3%;

  position: relative;
  z-index: 1;

  overflow-y: hidden;

  &:nth-of-type(1) {
    background: linear-gradient(180deg, #9733c6 0%, #250527 100%);

    & > .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 3;
      background: linear-gradient(179.85deg, rgba(80, 17, 84, 0) 55.68%, #250527 99.87%);
    }
  }

  &:nth-of-type(2) {
    background: linear-gradient(180deg, #1f59cc 0%, #050827 100%);

    & > .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 3;
      background: linear-gradient(179.85deg, rgba(10, 30, 68, 0) 55.68%, #0a1e44 99.87%);
    }
  }

  &:nth-of-type(3) {
    background: linear-gradient(180deg, #ffde30 0%, #643907 100%);

    & > .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 3;
      background: linear-gradient(179.85deg, rgba(205, 91, 9, 0) 55.68%, #531a08 99.87%);
    }
  }

  &:nth-of-type(4) {
    background: linear-gradient(180deg, #1fccad 0%, #050827 100%);

    & > .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 3;
      background: linear-gradient(179.85deg, rgba(10, 68, 51, 0) 55.68%, #03a644 99.87%);
    }
  }
`;

const ThumbnailWrapper = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 2;

  display: flex;
  justify-content: center;

  & > * {
    width: 95%;
    height: 100%;
  }
`;

const MainContents = styled.div`
  position: absolute;
  bottom: 5.8rem;
  z-index: 4;

  margin-left: 1.9rem;
  margin-bottom: 1.8rem;
`;

const Title = styled.h3`
  font-size: 3.5rem;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  color: #ffffff;
  line-height: 4.3rem;
`;

const Broadcast = styled.span`
  font-size: 1.8rem;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  line-height: 2.3rem;
`;

const SubContents = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 4;

  display: flex;
  align-items: center;

  margin-left: 1.9rem;
  margin-bottom: 3.6rem;
`;

const ChannelIcon = styled.div`
  width: 2.6rem;
  height: 2.6rem;

  margin-right: 0.9rem;

  border-radius: 50%;
  border: 1px solid #767676;
`;

const Subscribe = styled.div`
  font-size: 1.4rem;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  color: #b4b4b4;
  line-height: 1.8rem;
`;

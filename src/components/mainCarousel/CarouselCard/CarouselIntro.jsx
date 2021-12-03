import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Live } from "../../../assets/icon/live.svg";
import { CommentBox } from "./CarouselChat/CommentBox";
import { displaySize } from "../../../styles/responsive";

export function CarouselIntro(props) {
  const { data } = props;
  const [comments, setComments] = useState([{ id: 0, name: "", content: "" }]);
  const nextId = useRef(0);

  const onInsert = useCallback(
    (content) => {
      const comment = {
        id: nextId.current,
        name: data.review[nextId.current].review,
        content,
      };
      setComments((comments) => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );

  return (
    <IntroWrapper>
      <TopContent>
        <Live />
        <Title>{data && data.title}</Title>
        <Host>
          <div>
            <img src={process.env.PUBLIC_URL + `/img/profile${data && data.id}.svg`} alt="" />
          </div>
          <div>
            <span>{data && data.useName}</span>
            <span>팔로워 {data && data.followerCount}명</span>
          </div>
        </Host>
      </TopContent>
      <BottomContent>
        <CommentBox onInsert={onInsert} comments={comments} data={data} />
      </BottomContent>
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  width: 42%;
  ${displaySize("mobile")} {
    position: absolute;
    bottom: 12rem;
    left: 3rem;
    width: 86%;
  }
`;

const TopContent = styled.div`
  width: 100%;
  height: 51%;

  padding: 1.1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${displaySize("mobile")} {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.3rem;
  letter-spacing: 0em;

  display: table-cell;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 100%;
`;

const BottomContent = styled.div`
  width: 100%;
  height: 49%;
`;

const Host = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 1.1rem;
    width: 5rem;
    height: 5rem;
    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & > div > span:first-child {
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  & > div > span:nth-child(2) {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

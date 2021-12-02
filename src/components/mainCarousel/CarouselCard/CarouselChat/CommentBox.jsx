import React, { useState } from "react";
import styled from "styled-components";
import { postBanner } from "../../../../data/apiService/real/bannerServiceReal";
import { CarouselComment } from "./CarouselComment";

export function CommentBox(props) {
  const { data } = props;
  const [message, setMessage] = useState({
    userName: "수진",
    message: "",
  });

  return (
    <CommentWrapper>
      <StyledCommentBox>
        {data &&
          data.messageList.map((comment) => {
            return <CarouselComment key={comment.id} name={comment.name} message={comment.message} />;
          })}
      </StyledCommentBox>
      <StyledForm className="CommentInsert">
        <StyledInput
          type="text"
          placeholder="메세지를 입력해주세요"
          onChange={(e) => {
            setMessage((pre) => {
              return { ...pre, message: e.target.value };
            });
          }}
        />
        <StyledButton
          text="보내기"
          onClick={async (e) => {
            e.preventDefault();

            const newMessage = message;
            await postBanner(newMessage);
          }}
        />
      </StyledForm>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  width: 100%;
  height: 71.2%;
`;

const StyledCommentBox = styled.div`
  width: 100%;
  height: 13.2rem;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 5.3rem;
`;
const StyledButton = styled.button``;

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  font-size: 20px;
  box-sizing: border-box;

  &[type="text"] {
    width: 76%;
    border: none;
    outline: none;
    padding: 1.6rem 2.6rem;
    background: #e6e6e6;
  }

  &[type="submit"] {
    position: relative;
    width: 24%;
    border: none;
    outline: none;
    padding: 1.6rem 2.6rem;
    background: #e6e6e6;
    line-height: 2.1rem;
  }
`;

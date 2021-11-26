import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { CarouselComment } from "./CarouselComment";

export function CommentBox(props) {
  const { onInsert, comments } = props;
  const [value, setValue] = useState({
    content: "",
  });

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        content: e.target.value,
      });
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.content);
      setValue({
        content: "",
      });

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <CommentWrapper>
      <StyledCommentBox>
        {comments &&
          comments.map((comment) => {
            return <CarouselComment key={comment.id} id={comment.id} name={comment.name} content={comment.content} />;
          })}
      </StyledCommentBox>
      <StyledForm className="CommentInsert" onSubmit={onSubmit}>
        <StyledInput type="text" placeholder="메세지를 입력해주세요" value={value.content} onChange={onChangeContent} />
        <StyledInput type="submit" value="보내기" />
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

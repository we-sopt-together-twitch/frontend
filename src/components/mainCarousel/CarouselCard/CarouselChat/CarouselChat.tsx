import React, { useCallback, useState } from "react";
import styled from "styled-components";

export function CarouselChat(props) {
  const { onInsert } = props;
  const [value, setValue] = useState({
    name: "",
    content: "",
  });

  // const onChangeName = useCallback(
  //   (e) => {
  //     setValue({
  //       name: e.target.value,
  //       content: value.content,
  //     });
  //   },
  //   [value],
  // );

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        name: value.name,
        content: e.target.value,
      });
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.name, value.content);
      setValue({
        name: "",
        content: "",
      });

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <>
      <StyledForm className="CommentInsert" onSubmit={onSubmit}>
        {/* <input className="inputNames" placeholder="이름" value={value.name} onChange={onChangeName} /> */}
        <StyledInput type="text" placeholder="메세지를 입력해주세요" value={value.content} onChange={onChangeContent} />
        <StyledInput type="submit" value="보내기" />
      </StyledForm>
    </>
  );
}
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

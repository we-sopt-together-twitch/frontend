import React from "react";
import styled from "styled-components";

export function CarouselComment(props) {
  const { name, message } = props;
  return (
    <StyledComment>
      <StyledName>{name}</StyledName>
      <StyledContent>{message}</StyledContent>
    </StyledComment>
  );
}

const StyledComment = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-bottom: 0.6rem;
`;

const StyledName = styled.div`
  font-size: 1.5rem;
  line-height: 1.9rem;
  margin-right: 1.2rem;
  color: #848484;

  display: table-cell;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const StyledContent = styled.div`
  font-size: 1.5rem;
  line-height: 1.9rem;

  display: table-cell;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

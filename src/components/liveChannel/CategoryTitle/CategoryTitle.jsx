import styled from "styled-components";

export function CategoryTitle(props) {
  const { title } = props;

  return (
    <TitleBox>
      <TitleText>{title} </TitleText>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const TitleText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.8rem;

  font-weight: 600;

  margin-top: 0.8em;
  width: 100%;

  display: table;
  table-layout: fixed;

  & > div {
    display: table-cell;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

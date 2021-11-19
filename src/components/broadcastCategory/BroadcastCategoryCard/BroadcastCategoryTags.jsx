import styled from "styled-components";

export function BroadcastCategoryTags(props) {
  const { tags = [] } = props;

  return (
    <StyledBroadcastTags>
      {tags.map((tag) => (
        <Tag key={tag}>
          <TagText>{tag}</TagText>
        </Tag>
      ))}
    </StyledBroadcastTags>
  );
}

const StyledBroadcastTags = styled.div`
  display: flex;
  margin-left: 1rem;

  font-size: 1.6rem;
  height: 2.4rem;
  margin-top: 1.3rem;
  margin-bottom: 2.7rem;

  & > *:not(:last-child) {
    margin-right: 0.02rem;
  }
`;

const Tag = styled.span`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.2rem 1.5rem;

  position: static;
  /* width: 7.5rem; */
  height: 2.4rem;
  left: 15.9rem;
  top: 0rem;

  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 1.7rem;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0rem 0.5rem;
`;

const TagText = styled.label`
  /* label */

  position: static;
  /* width: 4.5rem; */
  height: 2rem;
  left: 1.5rem;
  top: 0.2rem;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #212525;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

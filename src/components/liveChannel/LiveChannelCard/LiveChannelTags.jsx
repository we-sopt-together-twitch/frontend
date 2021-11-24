import styled from "styled-components";

export function LiveChannelTags(props) {
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

  font-size: 1.6rem;
  height: 2.4rem;
  margin-top: 1.3rem;

  & > *:not(:last-child) {
    margin-right: 0.02rem;
  }
`;

const Tag = styled.span`
  /* strategy */

  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.2rem 1rem;

  position: static;
  /* width: 65rem; */
  height: 1.9rem;
  left: 10.7rem;
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
  /* width: 2.3rem; */
  height: 1.5rem;
  left: 1rem;
  top: 2rem;

  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.5rem;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #212525;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

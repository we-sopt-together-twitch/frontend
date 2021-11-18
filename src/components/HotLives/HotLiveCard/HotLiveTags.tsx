import styled from "styled-components";

interface HotLivesProps {
  className?: string;

  tags: string[];
}

export function HotLiveTags(props: HotLivesProps) {
  const { tags = [] } = props;

  return (
    <StyledHotLives>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </StyledHotLives>
  );
}

const StyledHotLives = styled.div`
  display: inline-block;
  margin-top: 1.5em;
`;

const Tag = styled.span`
  width: 5em;
  height: 2em;
  padding: 0.1em 1.2em;
  margin-right: 0.6em;

  background: #c5c5c5;
  border-radius: 1.8em;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4em;

  color: #4b4b4b;
`;

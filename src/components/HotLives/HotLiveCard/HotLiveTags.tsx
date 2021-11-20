import styled, { css } from "styled-components";

interface HotLivesProps {
  className?: string;

  tags: string[];
  tablet: boolean;
}

export function HotLiveTags(props: HotLivesProps) {
  const { tags = [], tablet } = props;

  return (
    <StyledHotLives tablet={tablet}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </StyledHotLives>
  );
}

const StyledHotLives = styled.div<{ tablet: boolean }>`
  ${({ tablet }) =>
    tablet
      ? css`
          order: 1;
          margin-top: 0.7rem;
        `
      : css`
          order: 2;
        `};
`;

const Tag = styled.span`
  width: 5rem;
  height: 2rem;
  padding: 0.1rem 1.2rem;
  margin-right: 0.6rem;

  background: #c5c5c5;
  border-radius: 1.8rem;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: #4b4b4b;
`;

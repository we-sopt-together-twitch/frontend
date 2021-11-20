import styled, { css } from "styled-components";

interface HotLivesProps {
  className?: string;

  kinds: string[];
  tablet: boolean;
}

export function HotLiveKinds(props: HotLivesProps) {
  const { kinds = [], tablet = false } = props;

  return (
    <StyledHotLives tablet={tablet}>
      {kinds.map((kind) => (
        <Kind key={kind}>#{kind}</Kind>
      ))}
    </StyledHotLives>
  );
}

const StyledHotLives = styled.div<{ tablet: boolean }>`
  ${({ tablet }) =>
    tablet
      ? css`
          order: 2;
        `
      : css`
          order: 1;
        `};
`;

const Kind = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 1.5rem;
  color: #9146fe;

  margin-right: 0.7rem;
`;

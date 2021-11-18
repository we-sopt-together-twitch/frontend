import styled from "styled-components";
// import { colors } from "../../../styles/colors";

interface HotLivesProps {
  className?: string;

  kinds: string[];
}

export function HotLiveKinds(props: HotLivesProps) {
  const { kinds = [] } = props;

  return (
    <StyledHotLives>
      {kinds.map((kind) => (
        <Kind key={kind}>#{kind}</Kind>
      ))}
    </StyledHotLives>
  );
}

const StyledHotLives = styled.div`
  display: inline-block;
  margin-top: 0.9em;
`;

const Kind = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8em;
  color: #9146fe;

  margin-right: 0.5em;
`;

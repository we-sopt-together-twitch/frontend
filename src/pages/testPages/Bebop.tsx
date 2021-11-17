import styled from "styled-components";
import { RecommendChannels } from "../../components/recommendChannels/RecommendChannels";

export function BebopTestPage() {
  return (
    <Background>
      <RecommendChannels />
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  width: 150rem;

  background-color: lightgray;
`;

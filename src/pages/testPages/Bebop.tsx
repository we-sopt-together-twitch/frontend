import styled from "styled-components";
import { RecommendChannels } from "../../components/recommendChannels/RecommendChannels";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function BebopTestPage() {
  return (
    <Background>
      <RecommendChannels />
      <SwitchDisplay desktop={<p>Desktop</p>} mobile={<p>Mobile</p>} tablet={<p>Tablet</p>} />
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  width: 150rem;

  background-color: #fafafa;

  ${displaySize("mobile")} {
    background-color: green;
    padding: 1em;
    width: unset;
  }
`;

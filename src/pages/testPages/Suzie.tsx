import styled from "styled-components";
import { LiveChannel } from "../../components/liveChannel/LiveChannel";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function SuzieTestPage() {
  return (
    <Background>
      <LiveChannel />
      <SwitchDisplay desktop={<p>Desktop</p>} mobile={<p>Mobile</p>} tablet={<p>Tablet</p>} />
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  width: 150rem;

  background-color: lightgray;

  ${displaySize("tablet")} {
    background-color: yellow;
    padding: 1em;
    width: unset;
  }

  ${displaySize("mobile")} {
    background-color: green;
    padding: 1em;
    width: unset;
  }
`;

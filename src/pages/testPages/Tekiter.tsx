import styled from "styled-components";
import { BrowseLiveChannels } from "../../components/browseLiveChannels/BrowseLiveChannels";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function TekiterTestPage() {
  return (
    <Background>
      <BrowseLiveChannels />
      <SwitchDisplay desktop={<p>Desktop</p>} mobile={<p>Mobile</p>} tablet={<p>Tablet</p>} />
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  width: 70em;

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

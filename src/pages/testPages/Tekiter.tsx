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
  background-color: gray;

  padding: 5em;
  min-height: 100vh;

  ${displaySize("tablet")} {
    background-color: yellow;
  }

  ${displaySize("mobile")} {
    background-color: green;
  }
`;

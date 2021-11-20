import styled from "styled-components";
import { HotLives } from "../../components/HotLives/HotLives";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function BebopTestPage() {
  return (
    <Background>
      <HotLives />
      <SwitchDisplay desktop={<p>Desktop</p>} mobile={<p>Mobile</p>} tablet={<p>Tablet</p>} />
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  background-color: #fafafa;

  ${displaySize("tablet")} {
    background-color: yellow;
    padding: 2em;
    width: unset;
  }

  ${displaySize("mobile")} {
    background-color: green;
    padding: 1em;
    width: unset;
  }
`;

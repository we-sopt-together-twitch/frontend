import styled from "styled-components";
import { HotLives } from "../../components/HotLives/HotLives";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function BebopTestPage() {
  return (
    <Background>
      <HotLives />
      <SwitchDisplay desktop={<p>Desktop</p>} mobile={<p>Mobile</p>} />
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

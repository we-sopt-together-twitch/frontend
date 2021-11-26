import React from "react";
import styled from "styled-components";
import { SwitchDisplay } from "../../styles/responsive";

export function HotLivesLayout(props) {
  const { cards, mobileCards, tablet } = props;
  return (
    <OuterBox>
      <CardsSlot>
        <SwitchDisplay desktop={cards} tablet={tablet} mobile={mobileCards} />
      </CardsSlot>
    </OuterBox>
  );
}

const OuterBox = styled.div``;

const CardsSlot = styled.div`
  display: grid;
  width: 82%;
  height: fit-content;

  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 2em;
  grid-auto-flow: row;
`;

import React from "react";
import styled from "styled-components";
import { SwitchDisplay } from "../../styles/responsive";
import { displaySize } from "../../styles/responsive";

export function RecommendChannelsLayout(props) {
  const { cards, tablet, mobileCards } = props;
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
  width: 100%;
  height: fit-content;

  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 4rem;
  grid-auto-flow: row;

  ${displaySize("tablet")} {
    column-gap: 1.5rem;
  }
`;

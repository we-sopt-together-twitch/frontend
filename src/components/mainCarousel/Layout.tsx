import React from "react";
import styled from "styled-components";
import { SwitchDisplay } from "../../styles/responsive";

export function CarouselLayout(props) {
  const { cards, mobileCards } = props;
  return (
    <OuterBox>
      <CardsSlot>
        <SwitchDisplay desktop={cards} mobile={mobileCards} />
      </CardsSlot>
    </OuterBox>
  );
}

const OuterBox = styled.div``;

const CardsSlot = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;

  width: 150rem;

  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  grid-auto-flow: row;

  & > * {
  }
`;

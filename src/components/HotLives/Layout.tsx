import React from "react";
import styled from "styled-components";
import { SwitchDisplay } from "../../styles/responsive";

export const HotLivesLayout = (props) => {
  const { cards, mobileCards } = props;
  return (
    <OuterBox>
      <CardsSlot>
        <SwitchDisplay desktop={cards} mobile={mobileCards} />
      </CardsSlot>
    </OuterBox>
  );
};

const OuterBox = styled.div``;

const CardsSlot = styled.div`
  display: grid;
  width: 82%;
  height: fit-content;

  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 5rem;
  grid-auto-flow: row;
`;

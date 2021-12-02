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
  width: 100%;
  height: fit-content;
`;

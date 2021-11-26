import React from "react";
import styled from "styled-components";

export function RecommendChannelsLayout({ cards }) {
  return (
    <OuterBox>
      <CardsSlot>{cards}</CardsSlot>
    </OuterBox>
  );
}

const OuterBox = styled.div``;

const CardsSlot = styled.div`
  display: grid;
  width: 77.7%;
  height: 40rem;

  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 2rem;
  grid-auto-flow: row;
`;

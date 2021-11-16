import { ReactNode } from "react";
import styled from "styled-components";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

interface BrowseLiveChannelsLayoutProps {
  tab: ReactNode;
  cards: ReactNode;
  mobileCards: ReactNode;
}

export function BrowseLiveChannelsLayout(props: BrowseLiveChannelsLayoutProps) {
  const { tab, cards, mobileCards } = props;

  return (
    <OuterBox>
      <TabSlot>{tab}</TabSlot>
      <CardsSlot>
        <SwitchDisplay desktop={cards} mobile={mobileCards} />
      </CardsSlot>
    </OuterBox>
  );
}

const OuterBox = styled.div``;

const TabSlot = styled.div`
  margin-bottom: 1.5em;
`;

const CardsSlot = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;

  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  grid-auto-flow: row;

  ${displaySize("mobile")} {
    grid-template-columns: repeat(2, 1fr);
  }

  & > * {
  }
`;

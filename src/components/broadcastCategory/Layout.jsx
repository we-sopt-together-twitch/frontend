import styled from "styled-components";
import { displaySize, SwitchDisplay } from "../../styles/responsive";

export function BroadcastCategoryLayout(props) {
  const { cards, mobileCards } = props;

  return (
    <OuterBox>
      <CardsSlot>
        <SwitchDisplay desktop={cards} mobile={mobileCards} />
      </CardsSlot>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  & > * {
  }
`;

const CardsSlot = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;

  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  grid-auto-flow: row;

  ${displaySize("mobile")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

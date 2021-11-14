import { useState } from "react";
import styled from "styled-components";
import { BroadcastCard } from "../../components/browseLiveChannels/BroadcastCard";
import { CategoryTab, CategoryTabItem } from "../../components/browseLiveChannels/CategoryTab";

export function TekiterTestPage() {
  const [tabValue, setTabValue] = useState("game");

  return (
    <Background>
      <Slot>
        <BroadcastCard title="hello" summary="world" tags={["#Animal", "#Cat"]} />
      </Slot>
      <CategoryTab value={tabValue} onChange={(e, val) => setTabValue(val)}>
        <CategoryTabItem label="Game" value="game" />
        <CategoryTabItem label="Real Life" value="IRL" />
      </CategoryTab>
    </Background>
  );
}

const Slot = styled.div`
  width: 18rem;
  height: 22rem;
`;

const Background = styled.div`
  background-color: gray;

  padding: 5em;
  min-height: 100vh;
`;

import styled from "styled-components";
import { BroadcastCard } from "../../components/browseLiveChannels/BroadcastCard";

export function TekiterTestPage() {
  return (
    <Background>
      <Slot>
        <BroadcastCard title="hello" summary="world" tags={["#Animal", "#Cat"]} />
      </Slot>
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

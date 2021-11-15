import { useState } from "react";
import { BroadcastCard } from "./BroadcastCard";
import { CategoryTab, CategoryTabItem } from "./CategoryTab";
import { BrowseLiveChannelsLayout } from "./Layout";

export function BrowseLiveChannels() {
  const [selectedTab, setSelectedTab] = useState("game");

  const renderedCards = [...new Array(10)].map((_, idx) => (
    <BroadcastCard key={idx} title="hello" summary="world" tags={["#Animal", "#Cat"]} />
  ));

  return (
    <BrowseLiveChannelsLayout
      tab={
        <CategoryTab value={selectedTab} onChange={(e, val) => setSelectedTab(val)}>
          <CategoryTabItem label="GAME" value="game" />
          <CategoryTabItem label="REAL LIFE" value="real-life" />
          <CategoryTabItem label="MUSIC" value="music" />
          <CategoryTabItem label="E-SPORT" value="e-sport" />
        </CategoryTab>
      }
      cards={renderedCards}
    />
  );
}

import { useState } from "react";
import { BroadcastCard } from "./BroadcastCard";
import { CategoryTab, CategoryTabItem } from "./CategoryTab";
import { BrowseLiveChannelsLayout } from "./Layout";

function sampleData() {
  return {
    title: "제목",
    content: "내용",
    summary: "요약",
    tags: ["#Animal", "#Cat"],
  };
}

export function BrowseLiveChannels() {
  const [selectedTab, setSelectedTab] = useState("game");

  const cards = [...new Array(10)].map((_, idx) => <BroadcastCard key={idx} {...sampleData()} />);
  const mobileCards = [...new Array(10)].map((_, idx) => <BroadcastCard key={idx} {...sampleData()} compact />);

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
      cards={cards}
      mobileCards={mobileCards}
    />
  );
}

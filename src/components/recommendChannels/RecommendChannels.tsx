import React from "react";
import { ChannelCard } from "./ChannelCard";
import { RecommendChannelsLayout } from "./Layout";

function sampleData() {
  return {
    title: "Sona",
    broadcast: "K-POP Music",
    subscribe: "35.1만",
  };
}

export function RecommendChannels() {
  const cards = [...new Array(4)].map((_, idx) => <ChannelCard key={idx} {...sampleData()} />);

  return <RecommendChannelsLayout cards={cards} />;
}

import React, { useState, useEffect } from "react";
import { api } from "../../data/api";
import { HotLiveCard } from "./HotLiveCard/HotLiveCard";
import { HotLivesLayout } from "./Layout";

interface ChannelData {
  title: string;
  category: string;
  tags: string[];
  kinds: string[];
  host: {
    profileImage: string;
  };
  thumbnailImage: string;
}

export const HotLives = () => {
  const [channels, setChannels] = useState<ChannelData[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api.channel.getHotLive();
      setChannels(data);
    })();
  }, []);

  const cards = channels.map((channel, idx) => (
    <HotLiveCard
      key={idx}
      title={channel.title}
      category={channel.category}
      tags={channel.tags}
      kinds={channel.kinds}
      host={channel.host}
      thumbnailImage={channel.thumbnailImage}
    />
  ));
  const mobileCards = channels.map((channel, idx) => (
    <HotLiveCard
      key={idx}
      title={channel.title}
      category={channel.category}
      tags={channel.tags}
      kinds={channel.kinds}
      host={channel.host}
      thumbnailImage={channel.thumbnailImage}
    />
  ));

  return <HotLivesLayout cards={cards} mobileCards={mobileCards} />;
};

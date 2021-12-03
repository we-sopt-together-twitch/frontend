import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { ChannelCard } from "./ChannelCard";
import { RecommendChannelsLayout } from "./Layout";

interface ChannelInfo {
  host: { name: string; profileImage: string };
  category: string;
  subscribers: number;
  fullBodyImage: string;
}

export function RecommendChannels() {
  const [cardData, setCardData] = useState<ChannelInfo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api.channel.getRecommanded();
      setCardData(data);
      console.log(data);
    })();
  }, []);

  const cards = cardData.map((item, idx) => (
    <ChannelCard
      key={idx}
      category={item.category}
      fullBodyImage={item.fullBodyImage}
      profileImage={item.host.profileImage}
      hostName={item.host.name}
      subscribers={formatAmount(item.subscribers)}
    />
  ));

  return <RecommendChannelsLayout cards={cards} />;
}

function formatAmount(val: number): string {
  if (val <= 10000) {
    return `${val}`;
  }
  return `${Math.floor(val / 10000)}만`;
}

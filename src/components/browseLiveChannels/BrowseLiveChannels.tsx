import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { BroadcastCard } from "./BroadcastCard";
import { CategoryTab, CategoryTabItem } from "./CategoryTab";
import { BrowseLiveChannelsLayout } from "./Layout";

interface TabType {
  key: string;
  label: string;
}

interface ChannelData {
  title: string;
  summary: string;
  kinds: string[];
  thumbnailImage: string;
}

export function BrowseLiveChannels() {
  const [selectedTab, setSelectedTab] = useState("game");
  const [tabTypes, setTabTypes] = useState<TabType[]>([]);
  const [channels, setChannels] = useState<ChannelData[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api.channel.getTypes();
      setTabTypes(
        data.map((item) => ({
          key: item.key,
          label: item.en,
        })),
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.channel.getLives(selectedTab);

      setChannels(data);
    })();
  }, [selectedTab]);

  const cards = channels.map((channel, idx) => <BroadcastCard key={idx} {...channel} />);
  const mobileCards = channels.map((channel, idx) => <BroadcastCard key={idx} {...channel} compact />);

  return (
    <BrowseLiveChannelsLayout
      tab={
        <CategoryTab value={selectedTab} onChange={(e, val) => setSelectedTab(val)}>
          {tabTypes.map((tab) => (
            <CategoryTabItem label={tab.label} value={tab.key} key={tab.key} />
          ))}
        </CategoryTab>
      }
      cards={cards}
      mobileCards={mobileCards}
    />
  );
}

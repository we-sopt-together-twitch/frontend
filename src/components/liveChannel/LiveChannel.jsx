import { useEffect, useState } from "react";
import { api } from "../../data/api";
import { LiveChannelLayout } from "./Layout";
import { LiveChannelCard } from "./LiveChannelCard/LiveChannelCard";

export function LiveChannel() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.channel.getHotLive();

      setChannels(data);
    })();
  }, []);

  const cards = channels.map((channel, idx) => <LiveChannelCard key={idx} {...channel} />);
  const mobileCards = channels.map((channel, idx) => <LiveChannelCard key={idx} {...channel} compact />);

  return <LiveChannelLayout cards={cards} mobileCards={mobileCards} />;
}

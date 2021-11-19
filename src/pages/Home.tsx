import { BrowseLiveChannels } from "../components/browseLiveChannels/BrowseLiveChannels";
import { HomeLayout } from "./Home/Layout";

export function PageHome() {
  return (
    <HomeLayout
      explore={<div></div>}
      browseLive={<BrowseLiveChannels />}
      hotLive={<div></div>}
      recommanded={<div></div>}
    />
  );
}

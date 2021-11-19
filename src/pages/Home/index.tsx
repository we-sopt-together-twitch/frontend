import { BrowseLiveChannels } from "../../components/browseLiveChannels/BrowseLiveChannels";
import { MainLayout } from "../../components/mainFrame/MainLayout";
import { TopNav } from "../../components/mainFrame/TopNav";
import { HomeLayout } from "./Layout";

export function PageHome() {
  return (
    <MainLayout
      topNav={<TopNav />}
      content={
        <HomeLayout
          explore={<div></div>}
          browseLive={<BrowseLiveChannels />}
          hotLive={<div></div>}
          recommanded={<div></div>}
        />
      }
      footer={<div>footer</div>}
    />
  );
}

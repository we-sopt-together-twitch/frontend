import { BroadcastCategory } from "../../components/broadcastCategory/BroadcastCategory";
import { Footer } from "../../components/common/Footer";
import { LiveChannel } from "../../components/liveChannel/LiveChannel";
import { MainLayout } from "../../components/mainFrame/MainLayout";
import { TopNav } from "../../components/mainFrame/TopNav";
import { CategoryLayout } from "./layout";

export function PageCategory() {
  return (
    <MainLayout
      topNav={<TopNav />}
      content={<CategoryLayout broadcastCategory={<BroadcastCategory />} liveChannels={<LiveChannel />} />}
      footer={<Footer />}
    />
  );
}

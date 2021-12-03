import { BrowseLiveChannels } from "../../components/browseLiveChannels/BrowseLiveChannels";
import { Footer } from "../../components/common/Footer";
import { HotLives } from "../../components/HotLives/HotLives";
import { MainLayout } from "../../components/mainFrame/MainLayout";
import { CarouselBox } from "../../components/mainCarousel/CarouselCard/CarouselBox";
import { RecommendChannels } from "../../components/recommendChannels/RecommendChannels";
import { TopNav } from "../../components/mainFrame/TopNav";
import { HomeLayout } from "./Layout";

export function PageHome() {
  return (
    <MainLayout
      topNav={<TopNav />}
      content={
        <HomeLayout
          explore={<CarouselBox />}
          browseLive={<BrowseLiveChannels />}
          hotLive={<HotLives />}
          recommanded={<RecommendChannels />}
        />
      }
      footer={<Footer />}
    />
  );
}

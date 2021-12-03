import { AxiosInstance } from "axios";
import { types } from "../mock/assets/dummy";
import { getDummyChannels } from "../mock/utils";
import { ChannelService, HotLiveInfo, KindInfo, LivesInfo, RecommandedInfo } from "../types/channelService";

export class ChannelServiceReal implements ChannelService {
  constructor(private request: AxiosInstance) {}

  async getRecommanded(): Promise<RecommandedInfo[]> {
    const res = await this.request.get("/main/recommend-channel");

    const serverArr: ServerRecommandedInfo[] = res.data.data;

    const result: RecommandedInfo[] = serverArr.map((item) => {
      return {
        category: item.category,
        fullBodyImage: item.host.profileURL,
        subscribers: item.subscribers,
        host: {
          id: "",
          name: item.host.name,
          profileImage: item.host.logoURL,
        },
      };
    });

    return result;
  }
  async getHotLive(): Promise<HotLiveInfo[]> {
    const res = await this.request.get("/main/popular-live");

    const serverArr: ServerHotLiveInfo[] = res.data.data;

    const result: HotLiveInfo[] = serverArr.map((item) => ({
      title: item.title,
      category: item.summary,
      tags: item.tags,
      kinds: item.kinds,
      thumbnailImage: item.thumbnailImage,
      host: {
        id: "",
        name: "",
        profileImage: item.logoImage,
      },
    }));

    return result;
  }

  async getLives(): Promise<LivesInfo[]> {
    await sleep(100);
    return getDummyChannels(8);
  }

  async getTypes(): Promise<KindInfo[]> {
    await sleep(100);
    return types.map((type) => ({ ...type }));
  }
}

interface ServerRecommandedInfo {
  host: {
    name: string;
    profileURL: string;
    logoURL: string;
    bgColor: string;
  };
  category: string;
  subscribers: number;
}

interface ServerHotLiveInfo {
  title: string;
  summary: string;
  kinds: string[];
  tags: string[];
  thumbnailImage: string;
  logoImage: string;
}

function sleep(timedelta: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timedelta);
  });
}

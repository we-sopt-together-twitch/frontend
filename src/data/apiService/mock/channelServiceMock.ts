import { ChannelService, HotLiveInfo, KindInfo, LivesInfo, RecommandedInfo } from "../types/channelService";
import { types } from "./assets/dummy";
import { getDummyChannels, getDummyChannelsWithFullBody } from "./utils";

export class ChannelServiceMock implements ChannelService {
  async getRecommanded(): Promise<RecommandedInfo[]> {
    await sleep(100);
    return getDummyChannelsWithFullBody(4);
  }

  async getHotLive(): Promise<HotLiveInfo[]> {
    await sleep(100);
    return getDummyChannels(3);
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

function sleep(timedelta: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timedelta);
  });
}

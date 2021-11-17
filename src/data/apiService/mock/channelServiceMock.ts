import { ChannelService, HotLiveInfo, KindInfo, LivesInfo, RecommandedInfo } from "../types/channelService";
import { types } from "./dummy";

export class ChannelServiceMock implements ChannelService {
  async getRecommanded(): Promise<RecommandedInfo[]> {
    throw new Error("Method not implemented.");
  }
  async getHotLive(): Promise<HotLiveInfo[]> {
    throw new Error("Method not implemented.");
  }
  async getLives(): Promise<LivesInfo[]> {
    throw new Error("Method not implemented.");
  }
  async getTypes(): Promise<KindInfo[]> {
    return types.map((type) => ({ ...type }));
  }
}

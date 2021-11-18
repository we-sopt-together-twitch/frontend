import { ChannelInfo } from "../../entity";

export type RecommandedInfo = Pick<ChannelInfo, "host" | "category" | "subscribers"> & { fullBodyImage: string };
export type HotLiveInfo = Pick<ChannelInfo, "title" | "category" | "thumbnailImage" | "tags" | "kinds" | "host">;
export type LivesInfo = Pick<ChannelInfo, "title" | "kinds" | "summary" | "thumbnailImage">;
export type KindInfo = {
  key: string;
  ko: string;
  en: string;
};

export interface ChannelService {
  /**
   * 추천 채널
   */
  getRecommanded(): Promise<RecommandedInfo[]>;

  /**
   * 인기 라이브
   */
  getHotLive(): Promise<HotLiveInfo[]>;

  /**
   * 라이브 탐색
   * @param type 해당하는 종류
   */
  getLives(type: string): Promise<LivesInfo[]>;

  /**
   * 가능한 종류들 가져오기
   */
  getTypes(): Promise<KindInfo[]>;
}

export interface ChannelInfo {
  title: string;
  summary: string;
  tags: string[];
  kinds: string[];

  /** 방송 미리보기 썸네일의 이미지 주소 */
  thumbnailImage: string;

  /** 현재 시청자 수 */
  nowWatchingCount: number;

  /** 카테고리 = 현재 플레이중인 게임 */
  category: string;

  /** 구독자수 */
  subscribers: number;

  /** 방송하는 사람 정보 */
  host: {
    name: string;
    id: string;

    /** 프로필 이미지 주소 */
    profileImage: string;
  };
}

export interface CategoryInfo {
  /** 게임 제목 */
  title: string;

  /** 시청자수 */
  watching: number;
  tags: string[];
  thumbnailImage: string;
}

export interface ChannelInfo {
  title: string;
  summary: string;
  tags: string[];
  kinds: string[];
  thumbnailImage: string;

  nowWatchingCount: number;
  category: string;

  subscribers: number;

  host: {
    name: string;
    id: string;
    profileImage: string;
  };
}

export interface CategoryInfo {
  title: string;
  watching: number;
  tags: string[];
  thumbnailImage: string;
}

import { CategoryInfo, ChannelInfo } from "../../../entity";

import profileImage from "./profile.png";
import thumbnailImage1 from "./thumbnail1.png";
import thumbnailImage2 from "./thumbnail2.png";
// import thumbnailImage3 from "./thumbnail3.png";
import fullBodyImage from "./fullBody.png";
import categoryImage from "./category.png";

export const types = [
  {
    key: "game",
    ko: "게임",
    en: "GAME",
  },
  {
    key: "irl",
    ko: "리얼라이프",
    en: "REAL LIFE",
  },
  {
    key: "music",
    ko: "음악",
    en: "MUSIC",
  },
  {
    key: "esport",
    ko: "E 스포츠",
    en: "E-SPORT",
  },
].map(freeze);

export const channels: ChannelInfo[] = [
  {
    title: "테스트 방송입니다",
    kinds: ["LOL", "Game"],
    category: "League of Legends",
    tags: ["한국어", "전략"],
    nowWatchingCount: 237,
    subscribers: 34,
    summary: "방송을 처음한다!!",
    host: {
      id: "test1234",
      name: "뉴비",
      profileImage: profileImage,
    },
    thumbnailImage: thumbnailImage1,
  },
  {
    title: "An English Broadcast",
    kinds: ["IRL", "Travel"],
    category: "IRL",
    tags: [],
    nowWatchingCount: 1004,
    subscribers: 1998,
    summary: "Traveling Contents",
    host: {
      id: "travel123",
      name: "Traveller",
      profileImage: profileImage,
    },
    thumbnailImage: thumbnailImage2,
  },
  {
    title: "제목이 좀 쓸데없이 이상하게 많이많이많이 길어요",
    kinds: ["IRL", "Travel"],
    category: "IRL",
    tags: [],
    nowWatchingCount: 9998,
    subscribers: 8889,
    summary: "설명도 이게 너무 길면 어디서 어떻게 어디까지 나오는지 보기 위해 길어요",
    host: {
      id: "travel123",
      name: "Traveller",
      profileImage: profileImage,
    },
    thumbnailImage: thumbnailImage2,
  },
].map(freeze);

export const fullBody = fullBodyImage;

export const categories: CategoryInfo[] = [
  { title: "League of Legends", tags: ["MOBA", "AOS", "액션", "인성"], watching: 42000, thumbnailImage: categoryImage },
];

function freeze<T>(obj: T) {
  return Object.freeze(obj);
}

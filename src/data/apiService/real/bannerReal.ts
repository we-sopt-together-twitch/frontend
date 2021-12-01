import { client } from "./utils";

export const getBanner = async () => {
  const { data } = await client.get("/banner");
  const serverArr = data.data;
  const result = serverArr.map((item) => ({
    id: item.id,
    title: item.title,
    thumbnailImg: item.thumbnailImg,
    useName: item.useName,
    followerCount: item.followerCount,
    messageList: item.messageList,
  }));

  return result;
};

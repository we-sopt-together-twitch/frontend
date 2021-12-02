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
  console.log(`data`, data);

  return result;
};

export const postBanner = async (message) => {
  console.log(`message`, message);
  const { data } = await client.post("/banner/message", message);
  const serverArr = data.data;
  const result = serverArr;
  console.log(`POST data`, data);
  return result;
};

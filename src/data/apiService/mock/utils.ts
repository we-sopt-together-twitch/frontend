import { CategoryInfo, ChannelInfo } from "../../entity";
import { categories, channels, fullBody } from "./assets/dummy";

export function getDummyChannels(count: number) {
  const result = pickAmount(channels, count).map(copyChannel);
  return result;
}

export function getDummyChannelsWithFullBody(count: number) {
  return getDummyChannels(count)
    .map(copyChannel)
    .map((channel) => ({ ...channel, fullBodyImage: fullBody }));
}

export function getDummyCategories(count: number) {
  return pickAmount(categories, count).map(copyCategory);
}

function copyChannel(channel: ChannelInfo): ChannelInfo {
  return {
    ...channel,
    host: { ...channel.host },
  };
}

function copyCategory(category: CategoryInfo): CategoryInfo {
  return { ...category };
}

function pickAmount<T>(arr: T[], count: number): T[] {
  const result: T[] = [];

  for (let i = 0; i < count; i++) {
    const target = randomPick(arr);
    result.push(target);
  }

  return result;
}

function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randomPick<T>(arr: Array<T>) {
  return arr[randint(0, arr.length - 1)];
}

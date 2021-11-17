import { CategoryServiceMock } from "./mock/categoryServiceMock";
import { ChannelServiceMock } from "./mock/channelServiceMock";
import { APIService } from "./types";

export const api: APIService = apiFactory();

function apiFactory(): APIService {
  return createMockAPIService();
}

function createMockAPIService(): APIService {
  const category = new CategoryServiceMock();
  const channel = new ChannelServiceMock();

  return {
    category,
    channel,
  };
}

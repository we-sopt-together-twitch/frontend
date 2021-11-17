import { CategoryServiceMock } from "./apiService/mock/categoryServiceMock";
import { ChannelServiceMock } from "./apiService/mock/channelServiceMock";
import { APIService } from "./apiService/types";

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

import { CategoryServiceMock } from "./apiService/mock/categoryServiceMock";
import { ChannelServiceMock } from "./apiService/mock/channelServiceMock";
import { ChannelServiceReal } from "./apiService/real/channelServiceReal";
import { createAxiosSession } from "./apiService/real/utils";
import { APIService } from "./apiService/types";

export const api: APIService = apiFactory();

function apiFactory(): APIService {
  return createRealAPIService();
}

export function createMockAPIService(): APIService {
  const category = new CategoryServiceMock();
  const channel = new ChannelServiceMock();

  return {
    category,
    channel,
  };
}

export function createRealAPIService(): APIService {
  const request = createAxiosSession();

  const category = new CategoryServiceMock();
  const channel = new ChannelServiceReal(request);

  return {
    category,
    channel,
  };
}

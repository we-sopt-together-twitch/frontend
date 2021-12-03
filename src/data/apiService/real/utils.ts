import axios, { AxiosInstance } from "axios";

export function createAxiosSession(): AxiosInstance {
  const api = axios.create({
    baseURL: "https://asia-northeast3-twitchback-5d35f.cloudfunctions.net/api",
  });

  return api;
}

export const client = axios.create({
  baseURL: "https://asia-northeast3-twitchback-5d35f.cloudfunctions.net/api",
});

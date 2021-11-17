import { CategoryService } from "./categoryService";
import { ChannelService } from "./channelService";

export interface APIService {
  channel: ChannelService;
  category: CategoryService;
}

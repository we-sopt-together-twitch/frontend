import { CategoryInfo } from "../../entity";

export type GetCategoryInfo = CategoryInfo;

export interface CategoryService {
  /**
   * 방송 카테고리
   */
  getCategories(): Promise<GetCategoryInfo[]>;
}

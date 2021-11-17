import { CategoryInfo } from "../../entity";

export type GetCategoryInfo = CategoryInfo;

export interface CategoryService {
  getCategories(): Promise<GetCategoryInfo[]>;
}

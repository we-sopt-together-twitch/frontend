import { CategoryInfo } from "../../entity";
import { CategoryService } from "../types/categoryService";

export class CategoryServiceMock implements CategoryService {
  getCategories(): Promise<CategoryInfo[]> {
    throw new Error("Method not implemented.");
  }
}

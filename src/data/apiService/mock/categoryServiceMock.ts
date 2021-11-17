import { CategoryInfo } from "../../entity";
import { CategoryService } from "../types/categoryService";
import { getDummyCategories } from "./utils";

export class CategoryServiceMock implements CategoryService {
  async getCategories(): Promise<CategoryInfo[]> {
    sleep(100);
    return getDummyCategories(8);
  }
}

function sleep(timedelta: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timedelta);
  });
}

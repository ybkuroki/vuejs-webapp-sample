import ajax from "@/api/ajax";
import { ApiCategory } from "@/const";

export default class Category {
  id: number;
  name: string;

  constructor()
  constructor(id?: number, name?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
  }

  public getCategories(success: (data: Category[]) => void): void {
    ajax.get<Category[]>(ApiCategory)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => false)
  }
}
import Category from "./category";
import Format from "./format";

export default class Book {
  id: number;
  title: string;
  isbn: string;
  categoryId: number;
  category: Category;
  formatId: number;
  format: Format;

  constructor(id?: number, title?: string, isbn?: string,
    categoryId?: number, category?: Category,
    formatId?: number, format?: Format) {
    this.id = id ?? 0
    this.title = title ?? ''
    this.isbn = isbn ?? ''
    this.categoryId = categoryId ?? 0
    this.category = category ?? new Category()
    this.formatId = formatId ?? 0
    this.format = format ?? new Format()
  }
}
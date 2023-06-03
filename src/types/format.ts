import ajax from "@/api/ajax";
import { ApiFormat } from "@/const";

export default class Format {
  id: number;
  name: string;

  constructor()
  constructor(id?: number, name?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
  }

  public getFormats(success: (data: Format[]) => void): void {
    ajax.get<Format[]>(ApiFormat)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => false)
  }
}
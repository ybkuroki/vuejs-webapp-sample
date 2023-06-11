export default class Format {
  id: number;
  name: string;

  constructor()
  constructor(id?: number, name?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
  }
}
interface Authority {
  id: number,
  name: string
}

export default class Account {
  id: number;
  name: string;
  authority_id: number;
  authority: Authority;

  constructor()
  constructor(id?: number, name?: string,
    authority_id?: number, authority?: Authority) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.authority_id = authority_id ?? 0
    const auth: Authority = { id: 0, name: '' }
    this.authority = authority ?? auth
  }
}
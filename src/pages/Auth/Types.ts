export interface IData {
  userName?: string;
  accountId: string;
  password: string;
}

export interface IAuth {
  visible: boolean,
  confirm: string,
  code: string,
  cnt: number
}
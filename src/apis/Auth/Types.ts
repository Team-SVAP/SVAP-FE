export interface IAuth {
  userName?: string;
  accountId: string;
  password: string;
  code?: string;
}

export interface ISignUp {
  Data: IAuth;
  Admin: boolean;
}
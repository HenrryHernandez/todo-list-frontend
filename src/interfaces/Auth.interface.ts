import { In_BasicUserInfo } from "./User.interface";

export interface In_LoginResponse {
  ok: boolean;
  msg: string;
  user: In_BasicUserInfo;
  token: string;
}

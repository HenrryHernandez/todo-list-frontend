export interface In_BasicUserInfo {
  id: number;
  name: string;
  lastname1: string;
  username: string;
  profilePicture: null;
}

export interface In_FullUserInfo extends In_BasicUserInfo {
  lastname2?: string;
}

export interface In_CreateUserResponse {
  ok: boolean;
  msg: string;
}

export interface In_GetBasicUserInfoResponse {
  ok: boolean;
  msg: string;
  user: In_BasicUserInfo;
  token: string;
}

export interface Out_CreateUserInfo {
  name: string;
  lastname1: string;
  lastname2?: string;
  username: string;
  password: string;
}

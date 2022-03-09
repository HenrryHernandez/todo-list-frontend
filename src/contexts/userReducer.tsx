import { In_BasicUserInfo } from "../interfaces/User.interface";

export interface UserState {
  id: number | null;
  name: string | null;
  lastname1: string | null;
  username: string | null;
  profilePicture: string | null;
}

type UserAction =
  | { type: "setUserInfo"; payload: In_BasicUserInfo }
  | { type: "cleanUserInfo" };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "setUserInfo":
      return { ...action.payload };
    case "cleanUserInfo":
      return {
        ...state,
        id: null,
        name: "",
        lastname1: "",
        username: "",
        profilePicture: "",
      };

    default:
      return state;
  }
};

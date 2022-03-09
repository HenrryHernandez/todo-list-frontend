import { createContext, useReducer } from "react";

import { userReducer, UserState } from "./userReducer";

import { In_BasicUserInfo } from "../interfaces/User.interface";

type UserContextProps = {
  id: number | null;
  name: string | null;
  lastname1: string | null;
  username: string | null;
  profilePicture: string | null;

  saveUser: (userInfo: In_BasicUserInfo) => void;
};

const userInitialState: UserState = {
  id: null,
  name: "",
  lastname1: "",
  username: "",
  profilePicture: "",
};

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const saveUser = (userInfo: In_BasicUserInfo) => {
    dispatch({ type: "setUserInfo", payload: userInfo });
  };

  return (
    <UserContext.Provider value={{ ...state, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};

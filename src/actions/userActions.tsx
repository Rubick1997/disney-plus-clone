import { UserInfo } from "../types";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const setUserLogin = (userInfo: UserInfo) => {
  return { type: LOGIN, payload: userInfo };
};

export const setSignOut = () => {
  return { type: LOGOUT};
};

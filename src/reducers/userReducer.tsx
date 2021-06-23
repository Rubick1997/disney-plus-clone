import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN, LOGOUT } from "../actions";
import { UserInfo } from "../types";

const initialState: UserInfo = {
  name: "",
  email: "",
  photo: "",
};

const userReducer = (state = initialState, action: PayloadAction<UserInfo>) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
      return { ...state };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
export default userReducer;

import { PayloadAction } from "@reduxjs/toolkit";
import { GET_RECOMMENDED_CONTENT } from "../actions";

const recommendedContentReducer = (state = [], action: PayloadAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RECOMMENDED_CONTENT:
      return { ...state, payload };
      default:
      return state;
  }
};
export default recommendedContentReducer;

import { PayloadAction } from "@reduxjs/toolkit";
import { GET_RECOMMENDED_CONTENT } from "../actions";
import { ContentType } from "../types";

const recommendedContentReducer = (
  state: ContentType[] = [],
  action: PayloadAction
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RECOMMENDED_CONTENT:
      return payload;
    default:
      return state;
  }
};
export default recommendedContentReducer;

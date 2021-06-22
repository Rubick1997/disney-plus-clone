import { combineReducers } from "redux";
import recommendedContentReducer from "./recContentReducer";

export default combineReducers({
  recommendedContent: recommendedContentReducer,
});

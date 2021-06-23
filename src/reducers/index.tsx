import { combineReducers } from "redux";
import recommendedContentReducer from "./recContentReducer";
import userReducer from "./userReducer";
export default combineReducers({
  recommendedContent: recommendedContentReducer,
  user:userReducer,
});

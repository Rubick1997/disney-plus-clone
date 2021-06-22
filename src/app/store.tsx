import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThunkAction, Action } from '@reduxjs/toolkit';
import reduxThunk from "redux-thunk";
import reducers from "../reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
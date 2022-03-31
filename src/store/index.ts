import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userSlice from "./users/usersSlice";

const rootReducer = combineReducers({
  users: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

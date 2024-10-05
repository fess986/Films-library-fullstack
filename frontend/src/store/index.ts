import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { StoreNames } from "../const/const";
import { appSlice } from "./app/appSlice";
import { filmsSlice } from "./films/filmsSlice";
import { reviewsSlice } from "./reviews/reviewsSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [StoreNames.App]: appSlice.reducer,
    [StoreNames.Films]: filmsSlice.reducer,
    [StoreNames.Reviews]: reviewsSlice.reducer,
    [StoreNames.User]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

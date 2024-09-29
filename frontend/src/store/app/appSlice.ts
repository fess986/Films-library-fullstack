import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";

type AppState = {
  filmsShownCount: number
}

const initialAppState : AppState = {
  filmsShownCount: 8,
};

export const appSlice = createSlice({
  name: StoreNames.App,
  initialState: initialAppState,
  reducers: {
    setFilmsShownCount: (state, action : PayloadAction<number>) => {
      state.filmsShownCount = action.payload;
    },
  },
});
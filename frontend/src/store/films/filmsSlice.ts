import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { FilmProps } from "../../types/types";

type FilmsState = {
  activeFilm: FilmProps | null;
};

const initialFilmsState: FilmsState = {
  activeFilm: null,
};


export const filmsSlice = createSlice({
  name: StoreNames.Films,
  initialState: initialFilmsState,
  reducers: {
    setActiveFilm: (state, action: PayloadAction<FilmProps | null>) => {
      state.activeFilm = action.payload;
    },
  },
});
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { FilmProps } from "../../types/types";

type FilmsState = {
  filmList: FilmProps[];
  myFilmList: FilmProps[];
  similarFilmList: FilmProps[];

  activeFilm: FilmProps | null;
};

const initialFilmsState: FilmsState = {
  activeFilm: null,
  filmList: [],
  similarFilmList: [],
  myFilmList: [],
};


export const filmsSlice = createSlice({
  name: StoreNames.Films,
  initialState: initialFilmsState,
  reducers: {
    setActiveFilm: (state, action: PayloadAction<FilmProps | null>) => {
      state.activeFilm = action.payload;
    },
    setFilmList: (state, action: PayloadAction<FilmProps[]>) => {
      state.filmList = action.payload;
    },
    setSimilarFilmList: (state, action: PayloadAction<FilmProps[]>) => {
      state.similarFilmList = action.payload;
    },
    setMyFilmList: (state, action: PayloadAction<FilmProps[]>) => {
      state.myFilmList = action.payload;
    },
  },
});

export const {
  setActiveFilm,
  setFilmList,
  setSimilarFilmList,
  setMyFilmList,
} = filmsSlice.actions;
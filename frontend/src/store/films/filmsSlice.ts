import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { FilmProps } from "../../types/types";

type FilmsState = {
  activeFilm: FilmProps | null;
  filmList: FilmProps[];
  similarFilmList: FilmProps[];
  myFilmList: FilmProps[];
  promoFilm: FilmProps | null;
};

const initialFilmsState: FilmsState = {
  activeFilm: null,
  filmList: [],
  similarFilmList: [],
  myFilmList: [],
  promoFilm: null,
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
    setPromoFilm: (state, action: PayloadAction<FilmProps | null>) => {
      state.promoFilm = action.payload;
    },
  },
});
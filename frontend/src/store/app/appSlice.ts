import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";

type AppState = {
  filmsShownCount: number,
  activeGenre: string,

  isActiveFilmLoaded: boolean,
  isFilmsLoaded: boolean,
  isSimilarFilmsLoaded: boolean,
  isFavoriteFilmsLoaded: boolean,
  isPromoFilmLoaded: boolean,

  error: string | null,
}

const initialAppState : AppState = {
  filmsShownCount: 8,
  activeGenre: 'All genres',

  isActiveFilmLoaded: false,
  isFilmsLoaded: false,
  isSimilarFilmsLoaded: false,
  isFavoriteFilmsLoaded: false,
  isPromoFilmLoaded: false,
  
  error: null,
};

export const appSlice = createSlice({
  name: StoreNames.App,
  initialState: initialAppState,
  reducers: {
    setFilmsShownCount: (state, action : PayloadAction<number>) => {
      state.filmsShownCount = action.payload;
    },
    setActiveGenre: (state, action : PayloadAction<string>) => {
      state.activeGenre = action.payload;
    },
    setIsActiveFilmLoaded: (state, action : PayloadAction<boolean>) => {
      state.isActiveFilmLoaded = action.payload;
    },
    setIsFilmsLoaded: (state, action : PayloadAction<boolean>) => {
      state.isFilmsLoaded = action.payload;
    },
    setIsSimilarFilmsLoaded: (state, action : PayloadAction<boolean>) => {
      state.isSimilarFilmsLoaded = action.payload;
    },
    setIsFavoriteFilmsLoaded: (state, action : PayloadAction<boolean>) => {
      state.isFavoriteFilmsLoaded = action.payload;
    },
    setIsPromoFilmLoaded: (state, action : PayloadAction<boolean>) => {
      state.isPromoFilmLoaded = action.payload;
    },
    setError: (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});
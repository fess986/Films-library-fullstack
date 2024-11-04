import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames, AppRoutes } from "../../const/const";
import { FilmProps } from "../../types/types";
import { fetchFilms } from "../api-actions";
import browserHistory from "../../utils/browser-history";

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
  extraReducers: (builder) => {
		builder
			.addCase(fetchFilms.rejected, () => {
        console.log('fetchFilms.rejected')
        browserHistory.push(`${AppRoutes.ROOT}${AppRoutes.SIGN_IN}`);
			})
	},
});

export const {
  setActiveFilm,
  setFilmList,
  setSimilarFilmList,
  setMyFilmList,
} = filmsSlice.actions;
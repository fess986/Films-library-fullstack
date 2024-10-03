import { createSelector } from "@reduxjs/toolkit";

import { StoreNames } from "../../const/const";
import { RootState } from "../index";
import { getActiveGenre } from "../app/appSelectors";
import { ALL_GENRES } from "../../const/const";
import { FilmProps } from "../../types/types";

export const getFilmList = (state: RootState) =>
	state[StoreNames.Films].filmList;
export const getActiveFilm = (state: RootState) =>
	state[StoreNames.Films].activeFilm;
export const getSimilarFilmList = (state: RootState) =>
	state[StoreNames.Films].similarFilmList;
export const getPromoFilm = (state: RootState) =>
	state[StoreNames.Films].promoFilm;
export const getMyFilmList = (state: RootState) =>
	state[StoreNames.Films].myFilmList;

// фильтр фильмов по жанру с использование библиотеки reselect, строенной в reduxjs/toolkit - она позволяет объединять селекторы а так же мемоизировать результаты выполнения селекторов
export const getFilteredFilmList = createSelector(
	[getActiveGenre, getFilmList],  // Входные селекторы 
	(activeGenre, filmList) => {  // полученные данные из входных селекторов
		if (activeGenre === ALL_GENRES) {
			return filmList;
		}

		return filmList.filter((film: FilmProps) =>
			film.genre.includes(activeGenre)
		);
	}
);

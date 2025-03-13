import { createSelector } from '@reduxjs/toolkit'

import { StoreNames, ALL_GENRES } from '../../const/const'
import { FilmProps } from '../../types/types'
import { getActiveGenre } from '../app/appSelectors'
import { RootState } from '../index'
import { getFavoriteFilms } from '../user/userSelectors'

export const getFilmList = (state: RootState) =>
  state[StoreNames.Films].filmList
export const getActiveFilm = (state: RootState) =>
  state[StoreNames.Films].activeFilm
export const getSimilarFilmList = (state: RootState) =>
  state[StoreNames.Films].similarFilmList
export const getFilmById = (id: string) => (state: RootState) =>
  state[StoreNames.Films].filmList.find((film: FilmProps) => film.id === id)

// фильтр фильмов по жанру с использование библиотеки reselect, строенной в reduxjs/toolkit - она позволяет объединять селекторы а так же мемоизировать результаты выполнения селекторов
export const getFilteredFilmList = createSelector(
  [getActiveGenre, getFilmList], // Входные селекторы
  (activeGenre, filmList) => {
    // полученные данные из входных селекторов
    if (activeGenre === ALL_GENRES) {
      return filmList
    }

    return filmList.filter((film: FilmProps) =>
      film.genre.includes(activeGenre)
    )
  }
)

export const getFavoriteFilmList = createSelector(
  [getFavoriteFilms, getFilmList],
  (favoriteFilms, filmList) => {
    return filmList.filter((film: FilmProps) => favoriteFilms.includes(film.id))
  }
)

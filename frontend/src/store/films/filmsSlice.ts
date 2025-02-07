import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { StoreNames, AppRoutes } from '../../const/const'
import { FilmProps } from '../../types/types'
import browserHistory from '../../utils/browser-history'
import { fetchFilmsDB } from '../api-actions'

type FilmsState = {
  filmList: FilmProps[]
  similarFilmList: FilmProps[]

  activeFilm: FilmProps | null
}

export const initialFilmsState: FilmsState = {
  filmList: [],
  similarFilmList: [],

  activeFilm: null,
}

export const filmsSlice = createSlice({
  name: StoreNames.Films,
  initialState: initialFilmsState,
  reducers: {
    setActiveFilm: (state, action: PayloadAction<FilmProps | null>) => {
      state.activeFilm = action.payload
    },
    setFilmList: (state, action: PayloadAction<FilmProps[]>) => {
      state.filmList = action.payload
    },
    setSimilarFilmList: (state, action: PayloadAction<FilmProps[]>) => {
      state.similarFilmList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsDB.rejected, () => {
      toast.error('Не удалось загрузить фильмы')
      browserHistory.push(`${AppRoutes.ROOT}${AppRoutes.SIGN_IN}`)
    })
  },
})

export const { setActiveFilm, setFilmList, setSimilarFilmList } =
  filmsSlice.actions

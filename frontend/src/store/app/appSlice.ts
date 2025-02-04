import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { StoreNames } from '../../const/const'

type AppState = {
  filmsShownCount: number
  activeGenre: string

  isActiveFilmLoaded: boolean
  isFilmsLoaded: boolean
  isSimilarFilmsLoaded: boolean
  isDataLoading: boolean

  error: string | null
}

export const initialAppState: AppState = {
  filmsShownCount: 5,
  activeGenre: 'All genres',

  isActiveFilmLoaded: false,
  isFilmsLoaded: false,
  isSimilarFilmsLoaded: false,
  isDataLoading: false,

  error: null,
}

export const appSlice = createSlice({
  name: StoreNames.App,
  initialState: initialAppState,
  reducers: {
    setFilmsShownCount: (state, action: PayloadAction<number>) => {
      state.filmsShownCount = action.payload
    },
    setActiveGenre: (state, action: PayloadAction<string>) => {
      state.activeGenre = action.payload
    },
    setIsActiveFilmLoaded: (state, action: PayloadAction<boolean>) => {
      state.isActiveFilmLoaded = action.payload
    },
    setIsFilmsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isFilmsLoaded = action.payload
    },
    setIsSimilarFilmsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isSimilarFilmsLoaded = action.payload
    },
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload
    },
    resetFilmsShownCount: (state) => {
      state.filmsShownCount = initialAppState.filmsShownCount
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  setFilmsShownCount,
  setActiveGenre,
  setIsActiveFilmLoaded,
  setIsFilmsLoaded,
  setIsSimilarFilmsLoaded,
  setError,
  resetFilmsShownCount,
  setIsDataLoading,
} = appSlice.actions

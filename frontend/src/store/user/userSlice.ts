import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { StoreNames, AuthStatus } from '../../const/const'
import createToast from '../../utils/toast'
import { addFavoriteFilmDB } from '../api-actions'

const toast = createToast()
type UserState = {
  isAuth: AuthStatus
  favoriteFilms: string[]
  userId: string | null
  token: string | null
}

export const initialUserState: UserState = {
  isAuth: AuthStatus.UNKNOWN,
  token: null,
  favoriteFilms: [],
  userId: null,
}

export const userSlice = createSlice({
  name: StoreNames.User,
  initialState: initialUserState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.isAuth = action.payload
    },
    setFavoriteFilms: (state, action: PayloadAction<string[]>) => {
      state.favoriteFilms = action.payload
    },
    addToFavoriteFilm: (state, action: PayloadAction<string>) => {
      state.favoriteFilms = [...state.favoriteFilms, action.payload]
    },
    removeFromFavoriteFilm: (state, action: PayloadAction<string>) => {
      state.favoriteFilms = state.favoriteFilms.filter(
        (id) => id !== action.payload
      )
    },
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFavoriteFilmDB.fulfilled, () => {
      toast.success('Фильм успешно добавлен в избранное')
    })
  },
})

export const {
  setAuthStatus,
  setFavoriteFilms,
  setUserId,
  addToFavoriteFilm,
  removeFromFavoriteFilm,
  setToken,
} = userSlice.actions

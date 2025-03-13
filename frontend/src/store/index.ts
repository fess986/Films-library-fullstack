import { configureStore, combineReducers } from '@reduxjs/toolkit'
import type { ThunkDispatch, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { StoreNames } from '../const/const'
import { appSlice } from './app/appSlice'
import { filmsSlice } from './films/filmsSlice'
import { redirect } from './middlewares/redirect.ts'
import { reviewsSlice } from './reviews/reviewsSlice'
import { userSlice } from './user/userSlice'
import api from '../api/api'

export const rootReducer = combineReducers({
  [StoreNames.App]: appSlice.reducer,
  [StoreNames.Films]: filmsSlice.reducer,
  [StoreNames.Reviews]: reviewsSlice.reducer,
  [StoreNames.User]: userSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }).concat(redirect),
})

// export type RootState = ReturnType<typeof store.getState>;  // при использовании mw - данная конструкция перестаёт работать так как получается циклическая зависимость
export type RootState = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch;  // данная конструкция не работает при добавлении в типизацию RootState - middelware

export type AppDispatch = ThunkDispatch<RootState, typeof api, Action> // типизируем именно так для использования mw
export const useAppDispatch = () => useDispatch<AppDispatch>()

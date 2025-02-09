import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

import { rootReducer } from '../../store/index'

export const api = axios.create()

export const createTestStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: api } }),
  })
}

export const mockAxios = new AxiosMockAdapter(api)

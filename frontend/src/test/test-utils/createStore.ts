import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

import { rootReducer } from '../../store/index'

export const api = axios.create()
export const mockAxios = new AxiosMockAdapter(api)

export const createMockStore = (apiInstance?: typeof api) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: apiInstance },
      }),
  })}


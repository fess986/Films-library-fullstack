import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { describe, it, expect, beforeEach } from 'vitest'

import { ApiRoutes } from '../../../const/const'
import { baseURL } from '../const/const'
import { useError } from '../hooks/useError'
import { fetchFilmsDB } from '../store/api-actions'
import { rootReducer, RootState, AppDispatch } from '../store/index'
// import { AppDispatch } from '../types/types';

vi.mock('../hooks/useError', () => ({ useError: vi.fn() }))

const api = axios.create()
const mockAxios = new AxiosMockAdapter(api) // делаем надстройку над axios, которая позволит перехватывать вызовы и эмулировать возврат данных от сервера

describe('fetchFilmsDB thunk', () => {
  let store: ReturnType<typeof configureStore<RootState>>

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument: api } }),
    })

    mockAxios.reset()
  })

  it('dispatches actions correctly on success', async () => {
    const mockFilms = [
      { id: 1, title: 'Film 1' },
      { id: 2, title: 'Film 2' },
    ]
    mockAxios
      .onGet(`${baseURL}${ApiRoutes.FILMS}${ApiRoutes.GET_FILMS}`)
      .reply(200, mockFilms) // мокаем запрос на получение фильмов. Запрос должен в точности совпадать с реальным

    // загружаем начальные экшены и убеждаемся, что они соответствуют начальным значениям
    let actions = store.getState()
    expect(actions.APP.isFilmsLoaded).toBe(false)

    // диспатчим проверяемый запрос
    await (store.dispatch as AppDispatch)(fetchFilmsDB())

    // перезапись экшенов и проверка что они изменились предсказуемым образом
    actions = store.getState()
    expect(actions.FILMS.filmList).toEqual(mockFilms)
    expect(actions.APP.isDataLoading).toBe(false)
    expect(actions.APP.isFilmsLoaded).toBe(true)
  })

  it('dispatches actions correctly on failure', async () => {
    mockAxios
      .onGet(`${baseURL}${ApiRoutes.FILMS}${ApiRoutes.GET_FILMS}`)
      .reply(500)

    await (store.dispatch as AppDispatch)(fetchFilmsDB())

    const actions = store.getState()
    expect(actions.APP.isDataLoading).toBe(false)
    expect(actions.APP.isFilmsLoaded).toBe(false)
    expect(useError).toHaveBeenCalled() // проверяем что при ошибке должен был запускаться хук useError
  })
})

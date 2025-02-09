import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { describe, it, expect, beforeEach } from 'vitest'

import { ApiRoutes } from '../../../const/const'
import { baseURL, AuthStatus } from '../const/const'
import { useError } from '../hooks/useError'
import { fetchFilmsDB, addFavoriteFilmDB } from '../store/api-actions'
import { rootReducer, RootState, AppDispatch } from '../store/index'
// import local from '../utils/localStorage'

vi.mock('../hooks/useError', () => ({ useError: vi.fn() }))

// const localMock = vi.fn()
// vi.mock('../utils/localStorage', () => ({
//   default: localMock, 
//   }))

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
    vi.clearAllMocks()
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
    console.log(actions)
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

describe('addFavoriteFilmDB thunk', () => {
  let store: ReturnType<typeof configureStore<RootState>>

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument: api } }),
    })
    mockAxios.reset()
    vi.clearAllMocks()
  })

  it('dispatches actions correctly on success', async () => {
    const userId = '123'
    const filmId = '456'
    
    mockAxios
      .onPost(
        `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.ADD_FAVORITE_FILM.replace(':userId', userId)}`,
        { filmId }
      )
      .reply(200)

    await (store.dispatch as AppDispatch)(addFavoriteFilmDB({ userId, filmId }))
    
    // проверяем что данные записались в стор
    expect(store.getState().USER.favoriteFilms).toContain(filmId)
  })

  it('dispatches actions correctly on failure', async () => {
    const userId = '123'
    const filmId = '456'
    
    mockAxios
      .onPost(
        `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.ADD_FAVORITE_FILM.replace(':userId', userId)}`,
        { filmId }
      )
      .reply(500)
    
    // проверяем начальное состояние
    expect(store.getState().USER.isAuth).toBe(AuthStatus.UNKNOWN)

    await (store.dispatch as AppDispatch)(addFavoriteFilmDB({ userId, filmId }))

    expect(store.getState().APP.isDataLoading).toBe(false)
    expect(store.getState().USER.isAuth).toBe(AuthStatus.NO_AUTH)
    expect(useError).toHaveBeenCalled()
  })
})
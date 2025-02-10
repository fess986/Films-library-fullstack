import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { describe, it, expect, beforeEach } from 'vitest'

import { ApiRoutes } from '../../../const/const'
import { baseURL, AuthStatus } from '../const/const'
import { useError } from '../hooks/useError'
import {
  fetchFilmsDB,
  addFavoriteFilmDB,
  removeFavoriteFilmDB,
} from '../store/api-actions'
import { rootReducer, RootState, AppDispatch } from '../store/index'
import local from '../utils/localStorage'
import { addToFavoriteFilm } from './user/userSlice'

vi.mock('../hooks/useError', () => ({ useError: vi.fn() }))

const api = axios.create()
const mockAxios = new AxiosMockAdapter(api) // делаем надстройку над axios, которая позволит перехватывать вызовы и эмулировать возврат данных от сервера

vi.mock('../utils/localStorage', () => ({
  default: {
    addFavoriteFilm: vi.fn(),
    removeFavoriteFilm: vi.fn(),
  },
}))

describe('api-actions tests', () => {
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

  describe('fetchFilmsDB thunk', () => {
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
    it('dispatches actions correctly on success', async () => {
      const userId = '123'
      const filmId = '456'

      mockAxios
        .onPost(
          `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.ADD_FAVORITE_FILM.replace(':userId', userId)}`,
          { filmId }
        )
        .reply(200)

      await (store.dispatch as AppDispatch)(
        addFavoriteFilmDB({ userId, filmId })
      )

      // проверяем что данные записались в стор
      expect(store.getState().USER.favoriteFilms).toContain(filmId)

      // проверяем, что local.addFavoriteFilm был вызван с правильным параметром
      expect(local.addFavoriteFilm).toHaveBeenCalledWith(filmId)
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

      await (store.dispatch as AppDispatch)(
        addFavoriteFilmDB({ userId, filmId })
      )

      expect(store.getState().APP.isDataLoading).toBe(false)
      expect(store.getState().USER.isAuth).toBe(AuthStatus.NO_AUTH)
      expect(useError).toHaveBeenCalled()
    })
  })

  describe('removeFavoriteFilmDB thunk', () => {
    it('dispatches actions correctly on success', async () => {
      const userId = '123'
      const filmId = '456'

      // настраиваем ответ сервера на запрос
      mockAxios
        .onDelete(
          `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.REMOVE_FAVORITE_FILM.replace(':userId', userId)}`,
          { data: { filmId } }
        )
        .reply(200)

      store.dispatch(addToFavoriteFilm(filmId)) // добавляем фильм в избранное для проверки последущего удаления
      expect(store.getState().USER.favoriteFilms).toContain(filmId) // проверяем что фильм добавлен

      // выполняем действие
      await (store.dispatch as AppDispatch)(
        removeFavoriteFilmDB({ userId, filmId })
      )

      // Проверяем, что фильм удалён из избранного
      expect(store.getState().USER.favoriteFilms).not.toContain(filmId)

      // Проверяем, что вызвалась локальная функция удаления
      expect(local.removeFavoriteFilm).toHaveBeenCalledWith(filmId)
    })

    it('dispatches actions correctly on failure', async () => {
      const userId = '123'
      const filmId = '456'

      mockAxios
        .onDelete(
          `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.REMOVE_FAVORITE_FILM.replace(':userId', userId)}`,
          { data: { filmId } }
        )
        .reply(500)

      await (store.dispatch as AppDispatch)(
        removeFavoriteFilmDB({ userId, filmId })
      )

      // Проверяем, что статус авторизации изменился
      expect(store.getState().USER.isAuth).toBe(AuthStatus.NO_AUTH)

      // Проверяем, что хук useError был вызван
      expect(useError).toHaveBeenCalled()
    })
  })
})

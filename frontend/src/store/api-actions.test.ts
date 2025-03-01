import { configureStore } from '@reduxjs/toolkit'
import { describe, it, expect, beforeEach } from 'vitest'

import { ApiRoutes } from '../../../const/const'
import { baseURL, AuthStatus } from '../const/const'
import { useError } from '../hooks/useError'
import {
  fetchFilmsDB,
  addFavoriteFilmDB,
  removeFavoriteFilmDB,
  loginAction,
  registerAction,
} from '../store/api-actions'
import { RootState, AppDispatch } from '../store/index'
import local from '../utils/localStorage'
import { addToFavoriteFilm } from './user/userSlice'
import { createMockStore, api, mockAxios } from '../test/test-utils/createStore'
import { loginUtil } from '../utils/authUtils'

// мокаем функции используемые в тестах
vi.mock('../hooks/useError', () => ({ useError: vi.fn() })) // useError
vi.mock('../utils/localStorage', () => ({
  // local
  default: {
    addFavoriteFilm: vi.fn(),
    removeFavoriteFilm: vi.fn(),
  },
}))
vi.mock('../utils/authUtils', () => ({ loginUtil: vi.fn() })) // loginUtil

describe('api-actions tests', () => {
  let store: ReturnType<typeof configureStore<RootState>>

  beforeEach(() => {
    store = createMockStore(api) // создаём на каждом шагу новый мок стора

    mockAxios.reset() // очищаем axios перед каждым тестом
    vi.clearAllMocks() // очищаем все моки перед каждым тестом
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

  describe('loginAction thunk', () => {
    const userInfo = { email: 'test@example.com', password: 'password123' }
    const mockResponse = {
      token: 'test-token',
      userId: '123',
      favoriteFilms: ['456', '789'],
    }

    it('dispatches actions correctly on success', async () => {
      mockAxios
        .onPost(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, userInfo)
        .reply(200, mockResponse)

      await (store.dispatch as AppDispatch)(loginAction(userInfo))

      const actions = store.getState()
      // Проверяем загрузку
      expect(actions.APP.isDataLoading).toBe(false)

      // Проверяем, что loginUtil вызван с правильными данными
      expect(loginUtil).toHaveBeenCalledWith(
        expect.any(Function), // dispatch
        mockResponse.token,
        mockResponse.userId,
        mockResponse.favoriteFilms
      )
    })

    it('dispatches actions correctly on failure', async () => {
      mockAxios
        .onPost(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, userInfo)
        .reply(500)

      await (store.dispatch as AppDispatch)(loginAction(userInfo))

      const actions = store.getState()

      // Проверяем, что статус авторизации изменился
      expect(actions.USER.isAuth).toBe(AuthStatus.NO_AUTH)

      // Проверяем, что useError был вызван
      expect(useError).toHaveBeenCalled()
    })
  })

  describe('registerAction thunk', () => {
    const userInfo = { email: 'test@example.com', password: 'password123' }
    const mockResponse = {
      token: 'test-token',
      userId: '123',
      favoriteFilms: [],
    }

    it('dispatches actions correctly on success', async () => {
      mockAxios
        .onPost(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, userInfo)
        .reply(200, mockResponse)

      await (store.dispatch as AppDispatch)(registerAction(userInfo))

      const actions = store.getState()
      // Проверяем загрузку
      expect(actions.APP.isDataLoading).toBe(false)

      // Проверяем, что loginUtil вызван с правильными данными
      expect(loginUtil).toHaveBeenCalledWith(
        expect.any(Function), // dispatch
        mockResponse.token,
        mockResponse.userId,
        mockResponse.favoriteFilms
      )
    })

    it('dispatches actions correctly on failure', async () => {
      mockAxios
        .onPost(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, userInfo)
        .reply(500)

      await (store.dispatch as AppDispatch)(loginAction(userInfo))

      const actions = store.getState()

      // Проверяем, что статус авторизации изменился
      expect(actions.USER.isAuth).toBe(AuthStatus.NO_AUTH)

      // Проверяем, что useError был вызван
      expect(useError).toHaveBeenCalled()
    })
  })
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import type { AxiosInstance } from 'axios' // Импортируем тип AxiosInstance

import { redirect } from './actions'
import useToast from '../hooks/useToast'
import { setIsFilmsLoaded, setIsDataLoading } from './app/appSlice'
import { setFilmList } from './films/filmsSlice'
import { setReviewsList } from './reviews/reviewsSlice'
import {
  setAuthStatus,
  addToFavoriteFilm,
  removeFromFavoriteFilm,
} from './user/userSlice'
import { ApiRoutes } from '../../../const/const'
import {
  ApiActions,
  ApiRoutesMock,
  AppRoutes,
  AuthStatus,
} from '../const/const'
import { useError } from '../hooks/useError'
import { Reviews } from '../mock/reviews'
import { commentProps, UserInfo, Review } from '../types/types'
import { loginUtil } from '../utils/authUtils'
import local from '../utils/localStorage'

import { RootState, AppDispatch } from '.'
type ThunkConfig = {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}

const baseMockUrl = 'http://localhost:5173'
const baseURL = import.meta.env.VITE_BASE_URL

// получаем все фильмы из базы данных
export const fetchFilmsDB = createAsyncThunk<
  void, // Возвращаемый тип данных
  void, // Аргументы, передаваемые в thunk
  {
    dispatch: AppDispatch // Типизация dispatch для опций функции
    state: RootState
    extra: AxiosInstance // Типизация extra аргумента
  }
>(
  ApiActions.FETCH_FILMS_DB, // Имя thunka
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setIsDataLoading(true))
      dispatch(setIsFilmsLoaded(true))
      const films = await api.get(
        `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.GET_FILMS}`
      )
      dispatch(setFilmList(films.data))
      dispatch(setIsDataLoading(false))
    } catch (err) {
      // при ошибке отклоняем авторизацию и показываем сообщение
      dispatch(setIsDataLoading(false))
      dispatch(setIsFilmsLoaded(false))
      useError(err as AxiosError | Error)
    }
  }
)

// записываем в базу фильмы все фильмы
export const setFilmsDB = createAsyncThunk<
  void, // Возвращаемый тип данных
  void, // Аргументы, передаваемые в thunk
  {
    dispatch: AppDispatch // Типизация dispatch для опций функции
    state: RootState
    extra: AxiosInstance // Типизация extra аргумента
  }
>(
  ApiActions.SET_FILMS_DB, // Имя thunka
  async (_arg, { dispatch, extra: api }) => {
    try {
      const toast = useToast()
      dispatch(setIsDataLoading(true))
      await api.post(`${baseURL}${ApiRoutes.FILMS}${ApiRoutes.SET_FILMS}`)
      toast.success('Данные загружены')
    } catch (err) {
      // при ошибке отклоняем авторизацию и показываем сообщение
      dispatch(setAuthStatus(AuthStatus.NO_AUTH))
      dispatch(setIsDataLoading(false))
      useError(err as AxiosError | Error)
    }
  }
)

// добавляем фильм в избранное
export const addFavoriteFilmDB = createAsyncThunk<
  void, // Возвращаемый тип данных
  { userId: string; filmId: string }, // передаём объект с данными пользователя и добавляемого фильма
  {
    dispatch: AppDispatch
    state: RootState
    extra: AxiosInstance
  }
>(
  ApiActions.ADD_FAVORITE_FILM_DB,
  async ({ userId, filmId }, { dispatch, extra: api }) => {
    try {
      const toast = useToast()
      // отправляем запрос, при этом прокидываем через params id пользователя, а через тело(обязательно объект который можно преобразовать в json - что происходит под капотом) - id фильма
      await api.post(
        `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.ADD_FAVORITE_FILM.replace(':userId', userId)}`,
        { filmId: filmId }
      )
      local.addFavoriteFilm(filmId)
      dispatch(addToFavoriteFilm(filmId))
      toast.success('Фильм успешно добавлен в избранное')
    } catch (err) {
      // при ошибке отклоняем авторизацию и показываем сообщение
      dispatch(setAuthStatus(AuthStatus.NO_AUTH))
      dispatch(setIsDataLoading(false))
      useError(err as AxiosError | Error)
    }
  }
)

export const removeFavoriteFilmDB = createAsyncThunk<
  void, // Возвращаемый тип данных
  { userId: string; filmId: string }, // передаём объект с данными пользователя и добавляемого фильма
  {
    dispatch: AppDispatch
    state: RootState
    extra: AxiosInstance
  }
>(
  ApiActions.REMOVE_FAVORITE_FILM_DB,
  async ({ userId, filmId }, { dispatch, extra: api }) => {
    try {
      console.log(userId)
      const toast = useToast()
      // отправляем запрос, при этом прокидываем через params id пользователя, а через DATA(особенность delete роута) - тело(обязательно объект который можно преобразовать в json - что происходит под капотом) - id фильма
      await api.delete(
        `${baseURL}${ApiRoutes.FILMS}${ApiRoutes.REMOVE_FAVORITE_FILM.replace(':userId', userId)}`,
        { data: { filmId } }
      )
      local.removeFavoriteFilm(filmId) // удаляем из хранилища
      dispatch(removeFromFavoriteFilm(filmId)) // удаляем из redux
      toast.success('Фильм удалён из избранного')
    } catch (err) {
      // при ошибке отклоняем авторизацию и показываем сообщение
      dispatch(setAuthStatus(AuthStatus.NO_AUTH))
      dispatch(setIsDataLoading(false))
      useError(err as AxiosError | Error)
    }
  }
)

// действия с отзывами........................
// получаем отзывы по id фильма
export const fetchReviews = createAsyncThunk<
  string, // Возвращаемый тип данных
  string, // Аргументы, передаваемые в thunk
  ThunkConfig // используем типизированную конфигурацию
>(ApiActions.FETCH_REVIEWS, async (id, { dispatch, extra: api }) => {
  // dispatch(setIsReviewsLoaded(false)); // перенесено в extraReducers

  const reviews = await api
    .get(baseMockUrl + ApiRoutesMock.FETCH_REVIEWS.replace(':id', String(id)))
    .then(() => Reviews as Review[])
  dispatch(setReviewsList(reviews))

  // dispatch(setIsReviewsLoaded(true)); // перенесено в extraReducers

  return 'some data' // то что мы возвращаем из thunk - попадает в action.payload при перехвате через slice extraReducers
})

export const fetchReviewsDB = createAsyncThunk<
  string, // Возвращаемый тип данных
  void, // Аргументы, передаваемые в thunk
  ThunkConfig // используем типизированную конфигурацию
>(ApiActions.FETCH_REVIEWS, async (_id, { dispatch, extra: api }) => {
  console.log('запрос reviews с фронта')
  console.log(dispatch)

  const reviews = await api.get(
    `${baseURL}${ApiRoutes.REVIEWS}${ApiRoutes.GET_REVIEWS}`
  )
  console.log(reviews)

  // const reviews = await api
  //   .get(baseMockUrl + ApiRoutesMock.FETCH_REVIEWS.replace(':id', String(id)))
  //   .then(() => Reviews as Review[])
  // dispatch(setReviewsList(reviews))

  // dispatch(setIsReviewsLoaded(true)); // перенесено в extraReducers

  return 'some data' // то что мы возвращаем из thunk - попадает в action.payload при перехвате через slice extraReducers
})

export const sendReview = createAsyncThunk<void, commentProps, ThunkConfig>(
  ApiActions.SEND_REVIEW,
  async (commentInfo, { dispatch, extra: api }) => {
    try {
      const toast = useToast()
      // await api.post(ApiRoutesMock.SEND_REVIEW, commentInfo);
      toast.info('Отправка отзыва')

      // нужно будет заменить на post, отправляем данные пользователя и комментария на сервер и получаем назад актуальные отзывы на фильм
      const response = await api
        .get(baseMockUrl + ApiRoutesMock.SEND_REVIEW)
        .then(() => Reviews as Review[])

      dispatch(setReviewsList(response))
      dispatch(
        redirect(
          `${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(
            ':id/*',
            String(commentInfo.filmId)
          )}`
        )
      )

      toast.success('Отзыв отправлен')
    } catch (error) {
      const toast = useToast()
      console.log(error)
      toast.error('Ошибка отправки отзыва')
    }
  }
)

export const sendReviewDB = createAsyncThunk<
  void, // Возвращаемый тип данных
  commentProps, // Аргументы, передаваемые в thunk
  ThunkConfig // используем типизированную конфигурацию
>(ApiActions.SEND_REVIEW_DB, async (review, { dispatch, extra: api }) => {
  console.log('отправка review с фронта')
  console.log(dispatch)

  await api.post(
    `${baseURL}${ApiRoutes.REVIEWS}${ApiRoutes.SET_REVIEW.replace(':filmId', review.filmId)}`,
    { review }
  )

  // тут нужно дописать код...
  // dispatch(setReviewsList(response))

  console.log('отправка review с фронта успешна')
})

// экшены связанные с авторизацией.............
// логин пользователя
export const loginAction = createAsyncThunk<
  void, // Возвращаемый тип данных
  UserInfo, // Аргументы, передаваемые в thunk
  ThunkConfig
>(
  ApiActions.LOGIN, // Имя thunkа
  async (loginInfo, { dispatch, extra: api }) => {
    try {
      const toast = useToast()
      dispatch(setIsDataLoading(true)) // загрузка

      // await api.post(`${baseURL}${ApiRoutes.FILMS}${ApiRoutes.SET_FILMS}`)
      // await api.get(`${baseURL}${ApiRoutes.FILMS}${ApiRoutes.GET_FILMS}`)

      // обращаемся к нашему серверу который при успехе вернет нам токен и userId
      const data = await api.post(
        `${baseURL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`,
        loginInfo
      )
      dispatch(setIsDataLoading(false)) // конец загрузки

      // регистрируем пользователя с полученными данными и записываем данные в redux и localStorage
      console.log('data - ', data)
      loginUtil(
        dispatch,
        data.data.token,
        data.data.userId,
        data.data.favoriteFilms
      )

      // редирект в мэйн
      dispatch(redirect(`${AppRoutes.ROOT}`))
      toast.success(
        `Регистрация прошла успешно! Добро пожаловать, ${loginInfo.email}`
      )
    } catch (err) {
      // при ошибке отклоняем авторизацию и показываем сообщение
      dispatch(setAuthStatus(AuthStatus.NO_AUTH))
      dispatch(setIsDataLoading(false))
      useError(err as AxiosError | Error)
    }
  }
)

// регистрация нового пользователя
export const registerAction = createAsyncThunk<
  void, // Возвращаемый тип данных
  UserInfo, // Аргументы, передаваемые в thunk
  ThunkConfig
>(
  ApiActions.REGISTER, // Имя thunkа
  async (registerInfo, { dispatch, extra: api }) => {
    try {
      const toast = useToast()
      dispatch(setIsDataLoading(true))
      const data = await api.post(
        `${baseURL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`,
        registerInfo
      )
      dispatch(setIsDataLoading(false))

      loginUtil(dispatch, data.data.token, data.data.userId, [])

      dispatch(redirect(`${AppRoutes.ROOT}`))
      toast.success(
        `Регистрация прошла успешно! Добро пожаловать, ${registerInfo.email}`
      )
      // return data.data
    } catch (err) {
      dispatch(setAuthStatus(AuthStatus.NO_AUTH))
      dispatch(setIsDataLoading(false))
      useError(err as AxiosError | Error)
    }
  }
)

// получаем все фильмы
// export const fetchFilms = createAsyncThunk<
//   void, // Возвращаемый тип данных
//   void, // Аргументы, передаваемые в thunk
//   {
//     dispatch: AppDispatch // Типизация dispatch для опций функции
//     state: RootState
//     extra: AxiosInstance // Типизация extra аргумента
//   }
// >(
//   // 'films/fetchFilms', // Имя thunka
//   ApiActions.FETCH_FILMS, // Имя thunka
//   // async (_arg, {dispatch, extra: api, requestId, signal }) => {  // доступные аргументы для опций функции, есть ещё
//   async (_arg, { dispatch, extra: api }) => {
//     // dispatch(redirect('/mylist'));

//     dispatch(setIsFilmsLoaded(false))
//     const response = await api
//       .get(baseMockUrl + ApiRoutesMock.FILMS)
//       .then(() => Films as FilmProps[])
//     // console.log(response);
//     dispatch(setFilmList(response))
//     dispatch(setIsFilmsLoaded(true))
//   }
// )

// получаем похожие фильмы
// export const fetchSimilarFilms = createAsyncThunk<
//   void, // Возвращаемый тип данных
//   string, // Аргументы, передаваемые в thunk
//   ThunkConfig
// >(
//   ApiActions.FETCH_SIMILAR_FILMS, // Имя thunkа
//   async (id, { dispatch, extra: api }) => {
//     const response = await api
//       .get(baseMockUrl + ApiRoutesMock.SIMILAR_FILMS.replace(':id', String(id)))
//       .then(() => Films as FilmProps[])

//     dispatch(setSimilarFilmList(response))
//   }
// )

// export const fetchFavoriteFilms = createAsyncThunk<
// 	void, // Возвращаемый тип данных
// 	number, // Аргументы, передаваемые в thunk
// 	ThunkConfig
// >(
// 	ApiActions.FETCH_FAVORITE_FILMS, // Имя thunkа
// 	async (userId, { dispatch, extra: api }) => {

// 		const response = await api
// 			.get(ApiRoutesMock.FETCH_FAVORITE_FILMS.replace(':id', String(userId)))
// 			.then(() => [1, 3, 5]);

// 		dispatch(setFavoriteFilms(response));
// 	}
// );

// пример испозования функции populate, которая преобразовывает айдишники фильмов в сами объекты этих фильмов
// async function getFavoriteFilms(userId: string) {
//   const user = await User.findById(userId).populate('favoriteFilms');
//   if (!user) {
//     throw new Error('User not found');
//   }

//   console.log('Favorite films:', user.favoriteFilms);
//   return user.favoriteFilms;
// }

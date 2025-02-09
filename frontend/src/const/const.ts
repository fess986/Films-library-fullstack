export default {}

export const baseURL = import.meta.env.VITE_BASE_URL
export const MINIMUM_REVIEW_LENGTH = 10
export const MAXIMUM_REVIEW_LENGTH = 1100
export const storageName = 'userData'

export const AppRoutes = {
  ROOT: '/',
  MAIN: 'main',
  SIGN_IN: 'login',
  MY_LIST: 'mylist',
  PLAYER: 'player/:id',
  FILM_CARD: 'films/:id/*',
  ADD_REVIEW: 'films/:id/review',
} as const

export const PageList = {
  MAIN: 'main',
  MYLIST: 'mylist',
  PLAYER: 'player',
  FILM_CARD: 'film-card',
  ADD_REVIEW: 'add-review',
  SIGN_IN: 'sign-in',
} as const

export enum StoreNames {
  App = 'APP',
  Films = 'FILMS',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export enum AuthStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum ApiActions {
  FETCH_FILMS_DB = 'films/fetchFilmsdb',
  SET_FILMS_DB = 'films/setFilmsdb',

  LOGIN = 'user/login', // авторизация
  REGISTER = 'user/register', // регистрация пользователя

  ADD_FAVORITE_FILM_DB = 'user/addFavoriteFilmdb', // добавить в избранное
  REMOVE_FAVORITE_FILM_DB = 'user/removeFavoriteFilmdb', // удалить из избранного

  FETCH_REVIEWS_DB = 'reviews/fetchReviewsdb', // получить отзывы
  SEND_REVIEW_DB = 'reviews/sendReviewdb', // отправить отзыв
  REMOVE_REVIEW_DB = 'reviews/removeReviewdb', // удалить отзыв

  FETCH_USER_REVIEWS_DB = 'reviews/fetchUserReviewsdb', // получить отзывы пользователя
}

export const ALL_GENRES = 'All genres'

export type PageList = (typeof PageList)[keyof typeof PageList]

export const FilmMenuList = ['Overview', 'Details', 'Reviews'] as const

type FilmMenuListType = typeof FilmMenuList
export type FilmMenuItemProps = FilmMenuListType[number]

// export enum ApiRoutesMock {
//   FILMS = '/films', // get
//   SIMILAR_FILMS = '/films/similar/:id', // get - id фильма
//   FETCH_FAVORITE_FILMS = '/films/favorite/:id', // get - id пользователя,
//   ADD_FAVORITE_FILM = '/films/add-favorite', // post - id пользователя, id фильма
//   REMOVE_FAVORITE_FILM = '/films/remove-favorite', // post - id пользователя, id фильма

//   FETCH_REVIEWS = '/reviews/:id', // get - /reviews/:film_id
//   SEND_REVIEW = '/reviews/add-review', // post, {commentProps}

//   LOGIN = '/login', // post - email, password
// }

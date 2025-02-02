export const ApiRoutes = {
  AUTH: '/api/auth', // общий для рработы с пользователями
  LOGIN: '/login', // post - email, password
  REGISTER: '/register',

  FILMS: '/api/films', // общий для фильмов
  GET_FILMS: '/get-films', // get
  SET_FILMS: '/set-films', // post
  ADD_FAVORITE_FILM: '/add-favorite/:userId', // post - id пользователя в параметрах, id фильма в теле
  REMOVE_FAVORITE_FILM: '/remove-favorite/:userId', // post - id пользователя в параметрах, id фильма в теле

  REVIEWS: '/api/reviews', // общий для отзывов
  GET_REVIEWS: '/get-reviews/:filmId', // get
  SET_REVIEW: '/set-review/:filmId', // post
  REMOVE_REVIEW: '/remove-review/:reviewId', // post

  GET_USER_REVIEWS: '/get-user-reviews/:userId', // get
}

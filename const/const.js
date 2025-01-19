// export enum ApiRoutes {
// 	// FILMS = '/films', // get
// 	// SIMILAR_FILMS = '/films/similar/:id',  // get - id фильма
// 	// FETCH_FAVORITE_FILMS = '/films/favorite/:id',  // get - id пользователя,
// 	// ADD_FAVORITE_FILM = '/films/add-favorite', // post - id пользователя, id фильма
// 	// REMOVE_FAVORITE_FILM = '/films/remove-favorite', // post - id пользователя, id фильма

// 	// FETCH_REVIEWS = '/reviews/:id', // get - /reviews/:film_id
// 	// SEND_REVIEW = '/reviews/add-review', // post, {commentProps}

//   AUTH = '/api/auth',
// 	LOGIN = '/login', // post - email, password
//   REGISTER = '/register',
// }

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
  GET_REVIEWS: '/get-reviews', // get
  SET_REVIEW: '/set-review', // post
}

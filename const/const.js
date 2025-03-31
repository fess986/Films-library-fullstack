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

export const FILM_GENRES = {
  Comedy: 'Comedy',
  Action: 'Action',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Drama',
  Horror: 'Horror',
  Mystery: 'Mystery',
  Romance: 'Romance',
  Thriller: 'Thriller',
  Adventure: 'Adventure',
  Biography: 'Biography',
  Criminal: 'Criminal',
}

export const FILM_LIST = {
  // комедии
  TheGrandBudapestHotel: 'The Grand Budapest Hotel',
  JohnnyEnglish: 'Johnny English',
  EuroTrip: 'EuroTrip',
  WhyHim: 'Why Him?',
  CityHunter: 'City Hunter',
  BadSanta: 'Bad Santa',

  // боевики
  KingsmanTheSecretService: 'Kingsman: The Secret Service',
  IronMan: 'Iron Man',
  Crank: 'Crank',
  Oldboy: 'Oldboy',
  Thursday: 'Thursday',

  MoonriseKingdom: 'Moonrise Kingdom',
  PulpFiction: 'Pulp Fiction',
  TheDarjeelingLimited: 'The Darjeeling Limited',
  TheAviator: 'The Aviator',
  TheRevenant: 'The Revenant',
  BohemianRhapsody: 'Bohemian Rhapsody',
}

export const FILM_LIST_RUS = {
  TheGrandBudapestHotel: 'Отель Гранд Будапешт',
  MoonriseKingdom: 'Королевство полной луны',
  PulpFiction: 'Криминальное чтиво',
  TheDarjeelingLimited: 'Поезд на Дарджилинг',
  TheAviator: 'Авиатор',
  TheRevenant: 'Выживший',
  JohnnyEnglish: 'Агент Джонни Инглиш',
  BohemianRhapsody: 'Богемская рапсодия',
  CityHunter: 'Плейбой под прикрытием',
  WhyHim: 'Почему он?',
  Crank: 'Адреналин',
  BadSanta: 'Плохой Санта',
  EuroTrip: 'Евротур',
  IronMan: 'Железный человек',
  KingsmanTheSecretService: 'Кингсмен: Секретная служба',
  Oldboy: 'Олдбой',
  Thursday: 'Кровавый четверг',
}

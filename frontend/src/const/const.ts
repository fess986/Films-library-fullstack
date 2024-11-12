export default {};

export const AppRoutes = {
	ROOT: "/",
	MAIN: "main",
	SIGN_IN: "login",
	MY_LIST: "mylist",
	PLAYER: "player/:id",
	FILM_CARD: "films/:id/*",
	ADD_REVIEW: "films/:id/review",
} as const;

export const PageList = {
	MAIN: "main",
	MYLIST: "mylist",
	PLAYER: "player",
	FILM_CARD: "film-card",
	ADD_REVIEW: "add-review",
	SIGN_IN: "sign-in",
} as const;

export enum StoreNames {
  App = 'APP',
  Films = 'FILMS',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export enum AuthStatus {
	AUTH = "AUTH",
	NO_AUTH = "NO_AUTH",
	UNKNOWN = "UNKNOWN",
} 

export enum ApiActions {
  FETCH_FILMS = 'films/fetchFilms',  // получить все фильмы
	FETCH_SIMILAR_FILMS = 'films/fetchSimilarFilms', // получить похожие
	LOGIN = 'user/login', // авторизация

	FETCH_FAVORITE_FILMS = 'user/fetchFavoriteFilms', // получить избранные
	ADD_FAVORITE_FILM = 'user/addFavoriteFilm', // добавить в избранное
	REMOVE_FAVORITE_FILM = 'user/removeFavoriteFilm', // удалить из избранного

	FETCH_REVIEWS = 'reviews/fetchReviews', // получить отзывы
}

export enum ApiRoutes {
	REVIEWS = '/reviews/:id', // get - /reviews/:film_id
	FILMS = '/films', // get
	SIMILAR_FILMS = '/films/similar/:id',  // get - id фильма

	FETCH_FAVORITE_FILMS = '/films/favorite/:id',  // get - id пользователя,
	ADD_FAVORITE_FILM = '/films/add-favorite', // post - id пользователя, id фильма
	REMOVE_FAVORITE_FILM = '/films/remove-favorite', // post - id пользователя, id фильма


	LOGIN = '/login', // post - email, password
	
}

export const ALL_GENRES = 'All genres';

export type PageList = (typeof PageList)[keyof typeof PageList];

export const FilmMenuList = ["Overview", "Details", "Reviews"] as const;

type FilmMenuListType = typeof FilmMenuList;
export type FilmMenuItemProps = FilmMenuListType[number];

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
  FETCH_FILMS = 'films/fetchFilms',
	FETCH_SIMILAR_FILMS = 'films/fetchSimilarFilms',
	LOGIN = 'user/login',

	FETCH_FAVORITE_FILMS = 'user/fetchFavoriteFilms',

	FETCH_REVIEWS = 'reviews/fetchReviews',
}

export enum ApiRoutes {
	REVIEWS = '/reviews/:id', // get - /reviews/:film_id
	FILMS = '/films', // get
	SIMILAR_FILMS = '/films/similar/:id',  // get - id фильма
	FETCH_FAVORITE_FILMS = '/films/favorite/:id',  // get - id пользователя,
	LOGIN = '/login', // post - email, password
	
}

export const ALL_GENRES = 'All genres';

export type PageList = (typeof PageList)[keyof typeof PageList];

export const FilmMenuList = ["Overview", "Details", "Reviews"] as const;

type FilmMenuListType = typeof FilmMenuList;
export type FilmMenuItemProps = FilmMenuListType[number];

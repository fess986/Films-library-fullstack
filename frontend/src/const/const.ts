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
	FETCH_REVIEWS = 'reviews/fetchReviews',
}

export enum ApiRoutes {
	REVIEWS = '/reviews/', // get - /reviews/:film_id
	FILMS = '/films',
}

export const ALL_GENRES = 'All genres';

export type PageList = (typeof PageList)[keyof typeof PageList];

export const FilmMenuList = ["Overview", "Details", "Reviews"] as const;

type FilmMenuListType = typeof FilmMenuList;
export type FilmMenuItemProps = FilmMenuListType[number];

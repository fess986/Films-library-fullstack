import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { FilmProps } from "../types/types";
import { Review } from "../types/types";

import { RootState, AppDispatch } from ".";

import { setFilmList, setSimilarFilmList } from "./films/filmsSlice";
import { setIsFilmsLoaded } from "./app/appSlice";
import { setReviewsList } from "./reviews/reviewsSlice";
import { setFavoriteFilms, setUserId, setAuthStatus, addToFavoriteFilm, removeFromFavoriteFilm } from "./user/userSlice";

import { Films } from "../mock/films";
import { Reviews } from "../mock/reviews";
import { ApiActions, ApiRoutes, AppRoutes, AuthStatus } from "../const/const";
import { commentProps } from "../types/types";
import { toast } from "react-toastify";
import { redirect } from "./actions";

type ThunkConfig = {
	dispatch: AppDispatch;
	state: RootState;
	extra: AxiosInstance;
};

// получаем все фильмы
export const fetchFilms = createAsyncThunk<
	void, // Возвращаемый тип данных
	void, // Аргументы, передаваемые в thunk
	{
		dispatch: AppDispatch; // Типизация dispatch для опций функции
		state: RootState;
		extra: AxiosInstance; // Типизация extra аргумента
	}
>(
	// 'films/fetchFilms', // Имя thunka
	ApiActions.FETCH_FILMS, // Имя thunka
	// async (_arg, {dispatch, extra: api, requestId, signal }) => {  // доступные аргументы для опций функции, есть ещё
	async (_arg, { dispatch, extra: api }) => {

    // dispatch(redirect('/mylist'));

		dispatch(setIsFilmsLoaded(false));
		const response = await api
			.get(ApiRoutes.FILMS)
			.then(() => Films as FilmProps[]);
		// console.log(response);
		dispatch(setFilmList(response));
		dispatch(setIsFilmsLoaded(true));
	}
);

// получаем отзывы по id фильма
export const fetchReviews = createAsyncThunk<
	string, // Возвращаемый тип данных
	number, // Аргументы, передаваемые в thunk
	ThunkConfig // используем типизированную конфигурацию
>(ApiActions.FETCH_REVIEWS, async (id, { dispatch, extra: api }) => {
	// dispatch(setIsReviewsLoaded(false)); // перенесено в extraReducers

	const reviews = await api
		.get(ApiRoutes.FETCH_REVIEWS.replace(':id', String(id)))
		.then(() => Reviews as Review[]);
	dispatch(setReviewsList(reviews));

	// dispatch(setIsReviewsLoaded(true)); // перенесено в extraReducers

	return "some data"; // то что мы возвращаем из thunk - попадает в action.payload при перехвате через slice extraReducers
});

// получаем похожие фильмы
export const fetchSimilarFilms = createAsyncThunk<
	void, // Возвращаемый тип данных
	number, // Аргументы, передаваемые в thunk
	ThunkConfig
>(
	ApiActions.FETCH_SIMILAR_FILMS, // Имя thunkа
	async (id, { dispatch, extra: api }) => {
		const response = await api
			.get(ApiRoutes.SIMILAR_FILMS.replace(':id', String(id)))
			.then(() => Films as FilmProps[]);
			
		dispatch(setSimilarFilmList(response));
	}
);

// export const fetchFavoriteFilms = createAsyncThunk<
// 	void, // Возвращаемый тип данных
// 	number, // Аргументы, передаваемые в thunk
// 	ThunkConfig
// >(
// 	ApiActions.FETCH_FAVORITE_FILMS, // Имя thunkа
// 	async (userId, { dispatch, extra: api }) => {

// 		const response = await api
// 			.get(ApiRoutes.FETCH_FAVORITE_FILMS.replace(':id', String(userId)))
// 			.then(() => [1, 3, 5]);

// 		dispatch(setFavoriteFilms(response));
// 	}
// );

// во время логина нам нужно получить на выходе сам статус авторизации, userId пользователя и список избранных фильмов
export const loginAction = createAsyncThunk<
	void, // Возвращаемый тип данных
	AuthStatus, // Аргументы, передаваемые в thunk
	ThunkConfig
>(
	ApiActions.LOGIN, // Имя thunkа
	async (loginInfo, { dispatch }) => {
		let response : AuthStatus;
		let id : number | null;

		if (loginInfo === AuthStatus.AUTH) {
			response = AuthStatus.AUTH;
			id = 1;
			dispatch(setFavoriteFilms([1, 3, 5]));  // устанавливаем список избранных фильмов
		} else {
			response = AuthStatus.NO_AUTH;
			id = null;
			dispatch(setFavoriteFilms([])); // сбрасываем список избранных фильмов
		}

		// await api.post(`${ApiRoutes.LOGIN}/${loginInfo}`);

		dispatch(setAuthStatus(response));  // устанавливаем статус авторизации ..
		dispatch(setUserId(id)); // устанавливаем userId
	}
);

// добавляем фильм в список избранных
export const addFavoriteFilm = createAsyncThunk<
	void, 
	{ userId: number; filmId: number;}, // передаём объект с данными пользователя и добавляемого фильма
	ThunkConfig
>(
	ApiActions.ADD_FAVORITE_FILM, 
	async (requestInfo, { dispatch, extra: api }) => {

		// отправляем данные пользователя и любимого фильма на сервер
		// const response = await api.post(ApiRoutes.ADD_FAVORITE_FILM, requestInfo).then(() => requestInfo.filmId);
		// нужно будет заменить на post
		const response = await api.get(ApiRoutes.ADD_FAVORITE_FILM).then(() => requestInfo.filmId);


		dispatch(addToFavoriteFilm(response)); // получаем id добавленного фильма и добавляем его в список любимых
	}
);

export const removeFavoriteFilm = createAsyncThunk<
	void, 
	{ userId: number; filmId: number;}, // передаём объект с данными пользователя и удаляемого фильма
	ThunkConfig
>(
	ApiActions.REMOVE_FAVORITE_FILM, 
	async (requestInfo, { dispatch, extra: api }) => {

		// отправляем данные пользователя и удаляемого фильма на сервер
		// const response = await api.delete(ApiRoutes.REMOVE_FAVORITE_FILM, {data: requestInfo}).then(() => requestInfo.filmId); // получаем id удаляемого фильма
		// нужно будет заменить на delete
		const response = await api.get(ApiRoutes.REMOVE_FAVORITE_FILM,).then(() => requestInfo.filmId); // получаем id удаляемого фильма

		dispatch(removeFromFavoriteFilm(response)); // получаем id удаляемого фильма и удаляем его из списка любимых
})

export const sendReview = createAsyncThunk<
void,
commentProps,
ThunkConfig
>(
	ApiActions.SEND_REVIEW,
	async (commentInfo, { dispatch, extra: api }) => {
		// await api.post(ApiRoutes.SEND_REVIEW, commentInfo);
		toast.info('Отправка отзыва');

		// нужно будет заменить на post, отправляем данные пользователя и комментария на сервер и получаем назад актуальные отзывы на фильм
		const response = await api.get(ApiRoutes.SEND_REVIEW)
		.then(() => Reviews as Review[]);

		dispatch(setReviewsList(response));
		dispatch(redirect(`${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(':id/*', String(commentInfo.filmId))}`));

		toast.success('Отзыв отправлен');
	}
)
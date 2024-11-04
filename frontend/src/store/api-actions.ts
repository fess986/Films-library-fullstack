import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { FilmProps } from "../types/types";
import { Review } from "../types/types";

import { RootState, AppDispatch } from ".";

import { setFilmList } from "./films/filmsSlice";
import { setIsFilmsLoaded } from "./app/appSlice";
import { setReviewsList } from "./reviews/reviewsSlice";

import { Films } from "../mock/films";
import { Reviews } from "../mock/reviews";
import { ApiActions, ApiRoutes } from "../const/const";
import { redirect } from "./actions";

type ThunkConfig = {
	dispatch: AppDispatch;
	state: RootState;
	extra: AxiosInstance;
};

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
		// console.log('фечим фильмы')
		// console.log('signal', signal);

    dispatch(redirect('root'));

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
		.get(`${ApiRoutes.REVIEWS}${id}`)
		.then(() => Reviews as Review[]);
	dispatch(setReviewsList(reviews));

	// dispatch(setIsReviewsLoaded(true)); // перенесено в extraReducers

	return "some data"; // то что мы возвращаем из thunk - попадает в action.payload при перехвате через slice extraReducers
});

// export const fetchActiveFilm = createAsyncThunk<
//   FilmProps, // Возвращаемый тип данных
//   string,    // Аргументы, передаваемые в thunk
//   ThunkConfig  // Используем типизацию конфигурации
// >(
//   ApiActions.FETCH_ACTIVE_FILM,
//   async (id, {dispatch, extra: api}) => {
//     // console.log('фечим активный фильм')
//     const response = await api.get(`/films/${id}`).then((response) => response.data);
//     // console.log(response);
//     return response;
//   }
// );

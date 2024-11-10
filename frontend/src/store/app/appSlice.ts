import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames } from "../../const/const";
import { fetchSimilarFilms } from "../api-actions";

type AppState = {
	filmsShownCount: number;
	activeGenre: string;

	isActiveFilmLoaded: boolean;
	isFilmsLoaded: boolean;
	isSimilarFilmsLoaded: boolean;
	isFavoriteFilmsLoaded: boolean;
	isPromoFilmLoaded: boolean;

	error: string | null;
};

export const initialAppState: AppState = {
	filmsShownCount: 5,
	activeGenre: "All genres",

	isActiveFilmLoaded: false,
	isFilmsLoaded: false,
	isSimilarFilmsLoaded: false,
	isFavoriteFilmsLoaded: false,
	isPromoFilmLoaded: false,

	error: null,
};

export const appSlice = createSlice({
	name: StoreNames.App,
	initialState: initialAppState,
	reducers: {
		setFilmsShownCount: (state, action: PayloadAction<number>) => {
			state.filmsShownCount = action.payload;
		},
		setActiveGenre: (state, action: PayloadAction<string>) => {
			state.activeGenre = action.payload;
		},
		setIsActiveFilmLoaded: (state, action: PayloadAction<boolean>) => {
			state.isActiveFilmLoaded = action.payload;
		},
		setIsFilmsLoaded: (state, action: PayloadAction<boolean>) => {
			state.isFilmsLoaded = action.payload;
		},
		setIsSimilarFilmsLoaded: (state, action: PayloadAction<boolean>) => {
			state.isSimilarFilmsLoaded = action.payload;
		},
		setIsFavoriteFilmsLoaded: (state, action: PayloadAction<boolean>) => {
			state.isFavoriteFilmsLoaded = action.payload;
		},
		setIsPromoFilmLoaded: (state, action: PayloadAction<boolean>) => {
			state.isPromoFilmLoaded = action.payload;
		},
		resetFilmsShownCount: (state) => {
			state.filmsShownCount = initialAppState.filmsShownCount;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSimilarFilms.pending, (state) => {
				state.isSimilarFilmsLoaded = false;
			})
			.addCase(fetchSimilarFilms.fulfilled, (state) => {
				state.isSimilarFilmsLoaded = true;
			})
			.addCase(fetchSimilarFilms.rejected, (state) => {
				state.isSimilarFilmsLoaded = false;
			})
	},
});

export const {
	setFilmsShownCount,
	setActiveGenre,
	setIsActiveFilmLoaded,
	setIsFilmsLoaded,
	setIsSimilarFilmsLoaded,
	setIsFavoriteFilmsLoaded,
	setIsPromoFilmLoaded,
	setError,
	resetFilmsShownCount,
} = appSlice.actions;

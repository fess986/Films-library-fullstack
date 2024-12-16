import { StoreNames } from "../../const/const";
import { RootState } from "../index";

export const getActiveGenre = (state: RootState) => state[StoreNames.App].activeGenre;
export const getFilmsShownCount = (state: RootState) => state[StoreNames.App].filmsShownCount;
export const getIsActiveFilmLoaded = (state: RootState) => state[StoreNames.App].isActiveFilmLoaded;
export const getIsFilmsLoaded = (state: RootState) => state[StoreNames.App].isFilmsLoaded;
export const getIsSimilarFilmsLoaded = (state: RootState) => state[StoreNames.App].isSimilarFilmsLoaded;
export const getIsFavoriteFilmsLoaded = (state: RootState) => state[StoreNames.App].isFavoriteFilmsLoaded;
export const getIsPromoFilmLoaded = (state: RootState) => state[StoreNames.App].isPromoFilmLoaded;
export const getIsDataLoading = (state: RootState) => state[StoreNames.App].isDataLoading;

export const getError = (state: RootState) => state[StoreNames.App].error;

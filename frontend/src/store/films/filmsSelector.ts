import { StoreNames } from "../../const/const";
import { RootState } from "../index";

export const getFilmList = (state: RootState) => state[StoreNames.Films].filmList;
export const getActiveFilm = (state: RootState) => state[StoreNames.Films].activeFilm;
export const getSimilarFilmList = (state: RootState) => state[StoreNames.Films].similarFilmList;
export const getPromoFilm = (state: RootState) => state[StoreNames.Films].promoFilm;
export const getMyFilmList = (state: RootState) => state[StoreNames.Films].myFilmList;
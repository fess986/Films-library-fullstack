import { StoreNames } from "../../const/const";
import { RootState } from "../index";

export const getActiveGenre = (state: RootState) => state[StoreNames.App].activeGenre;

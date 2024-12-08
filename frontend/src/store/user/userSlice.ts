import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames, AuthStatus } from "../../const/const";
// import { addFavoriteFilm } from "../api-actions";

type UserState = {
  isAuth: AuthStatus;
  favoriteFilms: number[];
  userId: number | null;
  token: string | null;
};

const initialUserState: UserState = {
  isAuth: AuthStatus.UNKNOWN,
  token: null,
  favoriteFilms: [],
  userId: null,
};

export const userSlice = createSlice({
  name: StoreNames.User,
  initialState: initialUserState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.isAuth = action.payload;
    },
    setFavoriteFilms: (state, action: PayloadAction<number[]>) => {
      state.favoriteFilms = action.payload;
    },
    addToFavoriteFilm: (state, action: PayloadAction<number>) => {
      state.favoriteFilms = [...state.favoriteFilms, action.payload];
    },
    removeFromFavoriteFilm: (state, action: PayloadAction<number>) => {
      state.favoriteFilms = state.favoriteFilms.filter((id) => id !== action.payload);
    },
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    }
  },
})

export const { setAuthStatus, setFavoriteFilms, setUserId, addToFavoriteFilm, removeFromFavoriteFilm, setToken } = userSlice.actions;
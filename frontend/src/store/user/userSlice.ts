import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames, AuthStatus } from "../../const/const";

type UserState = {
  isAuth: AuthStatus;
  favoriteFilms: number[];
  userId: number | null;
};

const initialUserState: UserState = {
  isAuth: AuthStatus.UNKNOWN,
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
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload;
    },
  },
})

export const { setAuthStatus, setFavoriteFilms, setUserId } = userSlice.actions;
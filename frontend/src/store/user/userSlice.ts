import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreNames, AuthStatus } from "../../const/const";

type UserState = {
  isAuth: AuthStatus;
};

const initialUserState: UserState = {
  isAuth: AuthStatus.UNKNOWN,
};

export const userSlice = createSlice({
  name: StoreNames.User,
  initialState: initialUserState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.isAuth = action.payload;
    },
  },
})

export const { setAuthStatus } = userSlice.actions;
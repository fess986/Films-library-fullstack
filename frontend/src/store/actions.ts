import { createAction } from "@reduxjs/toolkit";

export enum AppActions {
  REDIRECT = "app/redirect",  // перенаправление по указанному пути
}

// 2 способа создания одного и того же экшена
// export const redirect = createAction<string>(AppActions.REDIRECT);
export const redirect = createAction(AppActions.REDIRECT, (path: string) => ({
  payload: path,
}))
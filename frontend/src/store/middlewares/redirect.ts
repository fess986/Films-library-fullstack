// import {Middleware, UnknownAction, Action} from 'redux';
import { Middleware } from "@reduxjs/toolkit";

import { ApiActions, AppRoutes } from "../../const/const";
import browserHistory from "../../utils/browser-history";
import { AppActions } from "../actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const redirect: Middleware = () => (next) => (action: any) => {
	// используем объект истории browserHistory для перенаправления по указанному пути
	if (action.type === AppActions.REDIRECT) {
		browserHistory.push(action.payload);
	}

	// в случае ошибки скачивания рецензий перенаправляем на главную
	if (action.type === `${ApiActions.FETCH_REVIEWS}/rejected`) {
		console.log("redirect to main from middleware");
		browserHistory.push(AppRoutes.ROOT);
		return next(action);
	}

	return next(action); // Передаём экшен дальше если не перехватили его
};

// import {Middleware, UnknownAction, Action} from 'redux';
import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { AppActions } from "../actions";
import browserHistory from "../../utils/browser-history";

// type Reducer = ReturnType<typeof reducer>;

// export const redirect: Middleware<unknown, RootReducerType> =
//   (_store) =>
//     (next) =>
//       (action) => {

//         // отображение экшенов при отладке
//         // console.log(action.type);

//         // Все обычные экшены тут проходят, этот код будет вызываттся при смене жанра
//         // if (action.type === 'APP/changeGenre') {
//         //   console.log(action);
//         // }

//         // api-экшены так же вызывают Middleware, но в отличии от обычных они еще имеют статусы pending, fullfield и rejected. Так же у них есть кроме type и payload - объект-поле meta, который хранит данные статуса выполнения
//         // if (action.type === 'data/fetchFilms/fullfield') {
//         //   console.log(action);
//         // }

//         // тут мы перехватываем экшен REDIRECT_TO_ROUTE и пушим историю. Безусловно можно было сделать это и без Middleware
//         if (action.type === ActionTypes.REDIRECT_TO_ROUTE) {
//           browserHistory.push(action.payload);
//         }

//         if (action.type === `${ActionTypesAPI.FETCH_ACTIVE_FILM}/rejected`) {
//           browserHistory.push(AppRoute.Main);
//         }

//         return next(action);
//       };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const redirect: Middleware<RootState> = () => (next) => (action: any) => {
		console.log("Dispatching action:", action.type); // Выводим название экшена в консоль

		if (action.type === AppActions.REDIRECT) {
			// window.location.href = action.payload;
			console.log('redirect to', action.payload);
			browserHistory.push(action.payload);
		}

		return next(action); // Передаём экшен дальше
	};

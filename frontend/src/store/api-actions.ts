import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FilmProps } from "../types/types";
import { RootState, AppDispatch } from '.'; 

import { setFilmList } from './films/filmsSlice';
import { setIsFilmsLoaded } from './app/appSlice';

import { Films } from '../mock/films';
import { ApiActions } from '../const/const';

export const fetchFilms = createAsyncThunk<
void,  // Возвращаемый тип данных
  void,    // Аргументы, передаваемые в thunk
  {
    dispatch: AppDispatch; // Типизация dispatch для опций функции
    state: RootState;
    extra: AxiosInstance; // Типизация extra аргумента
  }
>(
  // 'films/fetchFilms', // Имя thunka
  ApiActions.FETCH_FILMS, // Имя thunka
  // async (_arg, {dispatch, extra: api, requestId, signal }) => {  // доступные аргументы для опций функции, есть ещё 
  async (_arg, {dispatch, extra: api }) => {
    // console.log('фечим фильмы')
    // console.log('signal', signal);

    dispatch(setIsFilmsLoaded(false));
    const response = await api.get('/films').then(() => Films as FilmProps[]);
    console.log(response);
    dispatch(setFilmList(response));
    dispatch(setIsFilmsLoaded(true));
  }
);

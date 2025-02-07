import { describe, it, expect } from 'vitest';

import {
  userSlice,
  initialUserState,
  setAuthStatus,
  setFavoriteFilms,
  addToFavoriteFilm,
  removeFromFavoriteFilm,
  setUserId,
  setToken,
} from './userSlice';
import { AuthStatus } from '../../const/const';

describe('userSlice reducer', () => {
  it('should return the initial state', () => {
    expect(userSlice.reducer(undefined, { type: 'undefined' })).toEqual(initialUserState);
  });

  it('should handle setAuthStatus', () => {
    const newState = userSlice.reducer(initialUserState, setAuthStatus(AuthStatus.AUTH));
    expect(newState.isAuth).toBe(AuthStatus.AUTH);
  });

  it('should handle setFavoriteFilms', () => {
    const films = ['film1', 'film2'];
    const newState = userSlice.reducer(initialUserState, setFavoriteFilms(films));
    expect(newState.favoriteFilms).toEqual(films);
  });

  it('should handle addToFavoriteFilm', () => {
    const newState = userSlice.reducer(initialUserState, addToFavoriteFilm('film3'));
    expect(newState.favoriteFilms).toContain('film3');
  });

  it('should handle removeFromFavoriteFilm', () => {
    const prevState = { ...initialUserState, favoriteFilms: ['film1', 'film2'] };
    const newState = userSlice.reducer(prevState, removeFromFavoriteFilm('film1'));
    expect(newState.favoriteFilms).not.toContain('film1');
  });

  it('should handle setUserId', () => {
    const newState = userSlice.reducer(initialUserState, setUserId('123'));
    expect(newState.userId).toBe('123');
  });

  it('should handle setToken', () => {
    const newState = userSlice.reducer(initialUserState, setToken('token123'));
    expect(newState.token).toBe('token123');
  });
});

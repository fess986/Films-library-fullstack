import { describe, it, expect, beforeEach, afterEach } from 'vitest';  // для наглядности, откуда это берётся

import local from './localStorage';
import { storageName } from '../const/const';

// Действия перед каждым запуском теста
beforeEach(() => {
  localStorage.clear();  // чистим
  localStorage.setItem(storageName, JSON.stringify({ favoriteFilms: [] })); // устанавливаем начальные данные
});

// Действия после каждого запуска теста
afterEach(() => {
  localStorage.clear();
});

describe('localStore utility', () => {
  it('should set and get item correctly', () => {
    const testData = { favoriteFilms: ['1', '2'] };
    local.setItem(testData);
    expect(local.getItem()).toEqual(testData);
  });

  it('should remove item correctly', () => {
    local.setItem({ favoriteFilms: ['1', '2'] });
    local.removeItem();
    expect(local.getItem()).toBeNull();
  });

  it('should add favorite film correctly', () => {
    local.addFavoriteFilm('3');
    expect(local.getItem().favoriteFilms).toContain('3');
  });

  it('should not duplicate favorite films', () => {
    local.addFavoriteFilm('3');
    local.addFavoriteFilm('3');
    expect(local.getItem().favoriteFilms).toEqual(['3']);
  });

  it('should remove favorite film correctly', () => {
    local.addFavoriteFilm('3');
    local.removeFavoriteFilm('3');
    expect(local.getItem().favoriteFilms).not.toContain('3');
  });
});
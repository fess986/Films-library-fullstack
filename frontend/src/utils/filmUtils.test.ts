import { faker } from '@faker-js/faker';
import { describe, it, expect } from 'vitest';

import { getSimilarFilms } from './filmsUtils';
import { FilmProps } from '../types/types';

// Функция для генерации случайного фильма
const createFakeFilm = (overrides?: Partial<FilmProps>): FilmProps => ({
  id: faker.string.uuid(),
  name: faker.lorem.words(3),
  posterImage: faker.image.url(),
  previewImage: faker.image.url(),
  videoLink: faker.internet.url(),
  previewVideoLink: faker.internet.url(),
  description: faker.lorem.paragraph(),
  rating: faker.number.float({ min: 1, max: 10, multipleOf: 0.1 }),
  scoresCount: faker.number.int({ min: 0, max: 10000 }),
  director: faker.person.fullName(),
  starring: [faker.person.fullName(), faker.person.fullName()],
  runTime: faker.number.int({ min: 60, max: 180 }),
  genre: [faker.music.genre()],
  released: faker.number.int({ min: 1980, max: 2025 }),
  isFavorite: faker.datatype.boolean(),
  similarFilms: [],
  likedByUsers: [],
  ...overrides
});

describe('getSimilarFilms', () => {
  // Генерируем тестовые фильмы
  const film1 = createFakeFilm();
  const film2 = createFakeFilm();
  const film3 = createFakeFilm();
  const unrelatedFilm = createFakeFilm();
  
  // Связываем похожие фильмы
  const activeFilm: FilmProps = {
    ...createFakeFilm(),
    similarFilms: [film1.id, film2.id]
  };

  const allFilms: FilmProps[] = [film1, film2, film3, unrelatedFilm];

  it('should return an empty array if activeFilm is null', () => {
    expect(getSimilarFilms(allFilms, null)).toEqual([]);
  });

  it('should return an empty array if activeFilm has an empty similarFilms array', () => {
    const filmWithoutSimilar: FilmProps = createFakeFilm({ similarFilms: [] });
    expect(getSimilarFilms(allFilms, filmWithoutSimilar)).toEqual([]);
  });

  it('should return only the films listed in activeFilm.similarFilms', () => {
    expect(getSimilarFilms(allFilms, activeFilm)).toEqual([film1, film2]);
  });

  it('should not return films that are not in allFilms', () => {
    const filmWithNonExistentSimilar: FilmProps = createFakeFilm({ similarFilms: [film1.id, 'non-existent-id'] });
    expect(getSimilarFilms(allFilms, filmWithNonExistentSimilar)).toEqual([film1]);
  });
});

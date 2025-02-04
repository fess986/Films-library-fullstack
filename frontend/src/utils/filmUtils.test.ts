import { describe, it, expect } from 'vitest'

import { getSimilarFilms } from './filmsUtils'
import createFakeFilm from '../test/test-utils/mockFilm'
import { FilmProps } from '../types/types'

describe('getSimilarFilms', () => {
  // Генерируем тестовые фильмы
  const film1 = createFakeFilm()
  const film2 = createFakeFilm()
  const film3 = createFakeFilm()
  const unrelatedFilm = createFakeFilm()

  // Связываем похожие фильмы
  const activeFilm: FilmProps = {
    ...createFakeFilm(),
    similarFilms: [film1.id, film2.id],
  }

  const allFilms: FilmProps[] = [film1, film2, film3, unrelatedFilm]

  it('should return an empty array if activeFilm is null', () => {
    expect(getSimilarFilms(allFilms, null)).toEqual([])
  })

  it('should return an empty array if activeFilm has an empty similarFilms array', () => {
    const filmWithoutSimilar: FilmProps = createFakeFilm({ similarFilms: [] })
    expect(getSimilarFilms(allFilms, filmWithoutSimilar)).toEqual([])
  })

  it('should return only the films listed in activeFilm.similarFilms', () => {
    expect(getSimilarFilms(allFilms, activeFilm)).toEqual([film1, film2])
  })

  it('should not return films that are not in allFilms', () => {
    const filmWithNonExistentSimilar: FilmProps = createFakeFilm({
      similarFilms: [film1.id, 'non-existent-id'],
    })
    expect(getSimilarFilms(allFilms, filmWithNonExistentSimilar)).toEqual([
      film1,
    ])
  })
})

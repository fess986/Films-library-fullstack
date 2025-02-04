import { describe, it, expect } from 'vitest'

import {
  appSlice,
  initialAppState,
  setFilmsShownCount,
  setActiveGenre,
  setIsActiveFilmLoaded,
  setIsFilmsLoaded,
  setIsSimilarFilmsLoaded,
  setIsDataLoading,
  setError,
  resetFilmsShownCount,
} from './appSlice'

describe('appSlice reducer', () => {
  // передаём неизвестное действие, соответственно ничего не должно произойти и поменяться
  it('should return the initial state', () => {
    expect(appSlice.reducer(undefined, { type: 'someUnknownAction' })).toEqual(
      initialAppState
    )
  })

  it('should handle setFilmsShownCount', () => {
    const newState = appSlice.reducer(initialAppState, setFilmsShownCount(10))
    expect(newState.filmsShownCount).toBe(10)
  })

  it('should handle setActiveGenre', () => {
    const newState = appSlice.reducer(initialAppState, setActiveGenre('Drama'))
    expect(newState.activeGenre).toBe('Drama')
  })

  it('should handle setIsActiveFilmLoaded', () => {
    const newState = appSlice.reducer(
      initialAppState,
      setIsActiveFilmLoaded(true)
    )
    expect(newState.isActiveFilmLoaded).toBe(true)
  })

  it('should handle setIsFilmsLoaded', () => {
    const newState = appSlice.reducer(initialAppState, setIsFilmsLoaded(true))
    expect(newState.isFilmsLoaded).toBe(true)
  })

  it('should handle setIsSimilarFilmsLoaded', () => {
    const newState = appSlice.reducer(
      initialAppState,
      setIsSimilarFilmsLoaded(true)
    )
    expect(newState.isSimilarFilmsLoaded).toBe(true)
  })

  it('should handle setIsDataLoading', () => {
    const newState = appSlice.reducer(initialAppState, setIsDataLoading(true))
    expect(newState.isDataLoading).toBe(true)
  })

  // при вызове метода resetFilmsShownCount, количество показываемых фильмов должно вернуться в начальное состояние
  it('should handle resetFilmsShownCount', () => {
    const modifiedState = { ...initialAppState, filmsShownCount: 15 }
    const newState = appSlice.reducer(modifiedState, resetFilmsShownCount())
    expect(newState.filmsShownCount).toBe(initialAppState.filmsShownCount)
  })

  it('should handle setError', () => {
    const newState = appSlice.reducer(
      initialAppState,
      setError('Network error')
    )
    expect(newState.error).toBe('Network error')
  })
})

import { toast } from 'react-toastify' // потом мы замокаем эту функцию. А импортируем для того чтобы обращаться к ней по названию toast
import { describe, it, expect, vi } from 'vitest'

import {
  filmsSlice,
  initialFilmsState,
  setActiveFilm,
  setFilmList,
  setSimilarFilmList,
} from './filmsSlice'
import { AppRoutes } from '../../const/const'
import createFakeFilm from '../../test/test-utils/mockFilm'
import browserHistory from '../../utils/browser-history' // мокаем дефолтный объект истории
import { fetchFilmsDB } from '../api-actions'

vi.mock('react-toastify', () => ({ toast: { error: vi.fn() } })) // мокаем react-toastify, теперь когда вызов идёт к react-toastify через его имя toast - код будет перенаправлен на объект { toast: { error: vi.fn() } } который будет иметь заглушку vi.fn(), через которую можно будет считывать параметры обращения к этой функции
vi.mock('../../utils/browser-history', () => ({
  default: { push: vi.fn() }, // если импорт дефолтный, то нужно обернуть его в объект с полем default
}))

const film1 = createFakeFilm()
const film2 = createFakeFilm()
const film3 = createFakeFilm()

describe('filmsSlice reducer', () => {
  it('should return the initial state', () => {
    expect(filmsSlice.reducer(void 0, { type: 'undefined' })).toEqual(
      initialFilmsState
    )
  })

  it('should handle setActiveFilm', () => {
    // const film = { id: 1, title: 'Film 1' };
    const newState = filmsSlice.reducer(initialFilmsState, setActiveFilm(film1))
    expect(newState.activeFilm).toEqual(film1)
  })

  it('should handle setFilmList', () => {
    const films = [film1, film2, film3]
    const newState = filmsSlice.reducer(initialFilmsState, setFilmList(films))
    expect(newState.filmList).toEqual(films)
  })

  it('should handle setSimilarFilmList', () => {
    const films = [film1, film2, film3]
    const newState = filmsSlice.reducer(
      initialFilmsState,
      setSimilarFilmList(films)
    )
    expect(newState.similarFilmList).toEqual(films)
  })

  it('should handle fetchFilmsDB.rejected', () => {
    const action = { type: fetchFilmsDB.rejected.type }
    filmsSlice.reducer(initialFilmsState, action)
    expect(toast.error).toHaveBeenCalledWith('Не удалось загрузить фильмы') // проверяем, отправлялось ли на toast.error сообщение
    expect(browserHistory.push).toHaveBeenCalledWith(
      `${AppRoutes.ROOT}${AppRoutes.SIGN_IN}`
    ) // проверяем, запускалась ли функция push с аргументом `${AppRoutes.ROOT}${AppRoutes.SIGN_IN}`
  })
})

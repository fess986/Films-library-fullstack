import { describe, it, vi, beforeEach } from 'vitest'

import { redirect } from './redirect'
import { ApiActions, AppRoutes } from '../../const/const'
import browserHistory from '../../utils/browser-history'
import { AppActions } from '../actions'

// мокаем дефолтный объект истории
vi.mock('../../utils/browser-history', () => ({
  default: { push: vi.fn() }, // заменяем только на поле push
}))

describe('Middleware: redirect', () => {
  // так как мы не мокаем store, мы вместо этого просто замокаем его дефолтные методы
  let next: ReturnType<typeof vi.fn> // подготавливаем next
  let dispatch: ReturnType<typeof vi.fn> // подготавливаем dispatch

  // обнуляем все функции и моки перед каждым тестом
  beforeEach(() => {
    next = vi.fn() // мокаем next
    dispatch = vi.fn() // мокаем dispatch
    vi.clearAllMocks() // очищаем мок перед каждым тестом
  })

  it('Должен вызывать browserHistory.push() при AppActions.REDIRECT', () => {
    const action = { type: AppActions.REDIRECT, payload: '/some-path' }

    // вызываем middleware по сигнатуре (store) => (next) => (action)
    redirect({ dispatch, getState: vi.fn() })(next)(action)

    expect(browserHistory.push).toHaveBeenCalledWith('/some-path') // происходит перенаправление
    expect(next).toHaveBeenCalledWith(action) // экшен должен передаваться дальше
  })

  it('Должен перенаправлять на главную при ApiActions.FETCH_REVIEWS_DB/rejected', () => {
    const action = { type: `${ApiActions.FETCH_REVIEWS_DB}/rejected` }

    redirect({ dispatch, getState: vi.fn() })(next)(action)

    expect(browserHistory.push).toHaveBeenCalledWith(AppRoutes.ROOT)
    expect(next).toHaveBeenCalledWith(action) // экшен должен передаваться дальше
  })

  it('Не должен вызывать browserHistory.push() для других экшенов', () => {
    const action = { type: 'SOME_OTHER_ACTION' }

    redirect({ dispatch, getState: vi.fn() })(next)(action)

    expect(browserHistory.push).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(action)
  })
})

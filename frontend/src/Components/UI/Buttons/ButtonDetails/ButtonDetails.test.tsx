import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { describe, it, beforeEach, vi } from 'vitest'

import ButtonDetails from './ButtonDetails'
import {
  setFilmsShownCount,
  initialAppState,
} from '../../../../store/app/appSlice'
import { setActiveFilm } from '../../../../store/films/filmsSlice'
import { createMockStore } from '../../../../test/test-utils/createStore'
import createFakeFilm from '../../../../test/test-utils/mockFilm'

// мокаем useNavigate
vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

// создаём моковый фильм
const mockFilm = createFakeFilm()

// функция рендера компонента в окружении роутера и провайдера стора
const renderButtonDetails = (store: ReturnType<typeof createMockStore>) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ButtonDetails />
      </MemoryRouter>
    </Provider>
  )
}

describe('ButtonDetails Component', () => {
  let store: ReturnType<typeof createMockStore>
  let navigateMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    store = createMockStore()
    store.dispatch(setActiveFilm(mockFilm))
    navigateMock = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(navigateMock)
    renderButtonDetails(store)
  })

  it('должен рендерить кнопку', () => {
    expect(screen.getByRole('button', { name: /details/i })).toBeInTheDocument()
  })

  it('должен навигировать при клике', async () => {
    const button = screen.getByRole('button', { name: /details/i })
    await userEvent.click(button)
    expect(navigateMock).toHaveBeenCalledWith(`/films/${mockFilm.id}`)
  })

  it('должен диспатчить resetFilmsShownCount при клике', async () => {
    const button = screen.getByRole('button', { name: /details/i })

    store.dispatch(setFilmsShownCount(1)) // установим тестовое состояние
    expect(store.getState().APP.filmsShownCount).toBe(1) // проверим запись в стор

    await userEvent.click(button) // нажимаем на кнопку
    expect(store.getState().APP.filmsShownCount).toBe(
      initialAppState.filmsShownCount
    ) // ожидаем что состояние сбросилось
  })
})

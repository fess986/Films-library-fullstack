import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom' // уже готовый роутер с историей
import { describe, it } from 'vitest'

import Logo from './Logo'
// import { resetFilmsShownCount } from '../../../store/app/appSlice'
import {
  setFilmsShownCount,
  initialAppState,
} from '../../../store/app/appSlice'
import { createMockStore } from '../../../test/test-utils/createStore'

// вынесем в отдельную функцию рендер для удобства
const renderLogo = (store: ReturnType<typeof createMockStore>) => {
  // const store = createMockStore()
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    </Provider>
  )
}

describe('Logo Component', () => {
  let store: ReturnType<typeof createMockStore>

  beforeEach(() => {
    store = createMockStore()
    renderLogo(store)
  })

  it('должен рендерить логотип с alt-текстом', () => {
    // находим картинку по alt
    const logoImage = screen.getByAltText('Films Library')
    expect(logoImage).toBeInTheDocument()
  })

  it('должен содержать ссылку на главную страницу', () => {
    const link = screen.getByRole('link') // находим по роли
    expect(link).toHaveAttribute('href', '/') // проверяем что есть нужный переход
  })

  it('должен диспатчить resetFilmsShownCount при клике', async () => {
    store.dispatch(setFilmsShownCount(1))
    expect(store.getState().APP.filmsShownCount).toBe(1)

    const link = screen.getByRole('link')
    await userEvent.click(link) // кликаем по кнопке

    expect(store.getState().APP.filmsShownCount).toBe(
      initialAppState.filmsShownCount
    )
  })
})

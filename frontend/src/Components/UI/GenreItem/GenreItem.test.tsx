import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, beforeEach } from 'vitest'

import GenreItem from './GenreItem'
import { createMockStore } from '../../../test/test-utils/createStore'

const renderGenreItem = (store: ReturnType<typeof createMockStore>, genre: string, active = false) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <GenreItem genre={genre} active={active} />
      </MemoryRouter>
    </Provider>
  )
}

describe('GenreItem Component', () => {
  let store: ReturnType<typeof createMockStore>
  const genre = 'Action'

  beforeEach(() => {
    store = createMockStore()
    renderGenreItem(store, genre)
  })

  it('должен рендерить жанр с переданным текстом', () => {
    expect(screen.getByText(genre)).toBeInTheDocument()
  })

  it('должен иметь ссылку с href="/"', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  it('должен изменить activeGenre при клике', async () => {
    const link = screen.getByRole('link')
    await userEvent.click(link)

    const activeGenreState = store.getState().APP.activeGenre
    expect(activeGenreState).toBe(genre)
  })
})

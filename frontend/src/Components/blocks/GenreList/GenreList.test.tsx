import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, beforeEach } from 'vitest'

import GenreList from './GenreList'
import { ALL_GENRES } from '../../../const/const'
import { setActiveGenre } from '../../../store/app/appSlice'
import { createMockStore } from '../../../test/test-utils/createStore'
import createFakeFilm from '../../../test/test-utils/mockFilm'
import { FilmProps } from '../../../types/types'

// создаём моковые данные
const mockFilms: FilmProps[] = [
  createFakeFilm(),
  createFakeFilm(),
  createFakeFilm(),
]

//
mockFilms[0].genre = ['Action']
mockFilms[1].genre = ['Drama']
mockFilms[2].genre = ['Comedy']

const renderGenreList = (
  store: ReturnType<typeof createMockStore>,
  films: FilmProps[]
) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <GenreList films={films} />
      </MemoryRouter>
    </Provider>
  )
}

describe('GenreList Component', () => {
  let store: ReturnType<typeof createMockStore>

  beforeEach(() => {
    store = createMockStore()
    store.dispatch(setActiveGenre(ALL_GENRES))
    renderGenreList(store, mockFilms)
  })

  it('должен рендерить список жанров', () => {
    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument()
    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Drama')).toBeInTheDocument()
  })
})

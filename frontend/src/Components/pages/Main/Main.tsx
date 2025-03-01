import { useSelector } from 'react-redux'

import { H2Hidden, SectionCatalog, DivCatalogContent } from './styles'
import {
  getIsFilmsLoaded,
  getFilmsShownCount,
} from '../../../store/app/appSelectors'
import { getFilteredFilmList } from '../../../store/films/filmsSelector'
import { FilmProps } from '../../../types/types'
import { shuffleFilms } from '../../../utils/utils'
import FilmList from '../../blocks/FilmList/FilmList'
import GenreList from '../../blocks/GenreList/GenreList'
import MoreFilmsButton from '../../UI/Buttons/MoreFilmsButton/MoreFilmsButton'

type MainProps = {
  films: FilmProps[]
}

const Main: React.FC<MainProps> = ({ films }) => {
  const filteredFilmList = useSelector(getFilteredFilmList) // получаем отфильтрованный по активному жанру список фильмов
  const shuffledFilms = shuffleFilms(filteredFilmList)

  const isFilmsLoaded = useSelector(getIsFilmsLoaded)
  const filmsShownCount = useSelector(getFilmsShownCount) // получаем количество отображаемых фильмов
  const shownFilms = shuffledFilms.slice(0, filmsShownCount) // учитываем количество отображаемых фильмов

  return (
    <DivCatalogContent>
      <SectionCatalog>
        <H2Hidden as="h2">Catalog</H2Hidden>
        <GenreList films={films} />

        {isFilmsLoaded ? (
          <FilmList films={shownFilms} />
        ) : (
          <div>Loading...</div>
        )}

        {filteredFilmList.length > filmsShownCount && <MoreFilmsButton />}
      </SectionCatalog>
    </DivCatalogContent>
  )
}

export default Main

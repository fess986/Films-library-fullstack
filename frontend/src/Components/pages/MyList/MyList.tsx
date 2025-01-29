import { useSelector } from 'react-redux'

import {
  H2Hidden,
  H2CatalogTitle,
  SectionCatalog,
  SectionCatalogContainer,
} from './styles'
import { getIsFilmsLoaded } from '../../../store/app/appSelectors'
import { getFavoriteFilmList } from '../../../store/films/filmsSelector'
import { FilmProps } from '../../../types/types'
import FilmList from '../../blocks/FilmList/FilmList'

const MyList: React.FC = () => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded)
  const favoriteFilms: FilmProps[] = useSelector(getFavoriteFilmList)

  return (
    <SectionCatalogContainer>
      <SectionCatalog>
        <H2Hidden as="h2">My favorite films</H2Hidden>
        <H2CatalogTitle>My favorite films</H2CatalogTitle>

        {isFilmsLoaded ? (
          <FilmList films={favoriteFilms} />
        ) : (
          <div>Loading...</div>
        )}
      </SectionCatalog>
    </SectionCatalogContainer>
  )
}

export default MyList

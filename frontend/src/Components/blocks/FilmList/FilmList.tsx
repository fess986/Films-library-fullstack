import { DivFilmList } from './styles'
import { FilmProps } from '../../../types/types'
import SmallFilmCard from '../../UI/SmallFilmCard/SmallFilmCard'

type FilmListProps = {
  films: FilmProps[]
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <DivFilmList>
      {films &&
        films.map((film) => <SmallFilmCard key={film.id} film={film} />)}
      {!films && <div>No films to show...</div>}
    </DivFilmList>
  )
}

export default FilmList

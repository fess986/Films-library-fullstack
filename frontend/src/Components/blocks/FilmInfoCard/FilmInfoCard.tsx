import { DivFilmInfoCard, DivFilmCardContainer } from './styles'
import { FilmProps } from '../../../types/types'
import FilmButtons from '../FilmButtons/FilmButtons'
import FilmCardDescription from '../FilmCardDescription/FilmCardDescription'

type FilmInfoProps = {
  film: FilmProps
}

const FilmInfoCard: React.FC<FilmInfoProps> = ({ film }) => {
  return (
    <DivFilmCardContainer>
      <DivFilmInfoCard>
        <FilmCardDescription film={film} />
        <FilmButtons addReview={true} id={film.id} />
      </DivFilmInfoCard>
    </DivFilmCardContainer>
  )
}

export default FilmInfoCard

import {
  H2FilmName,
  SpanGenre,
  SpanYear,
  PMeta,
  SpanRating,
  DivDescription,
} from './styles'
import { FilmProps } from '../../../types/types'

type FilmCardDescriptionProps = {
  film: FilmProps
}

const FilmCardDescription: React.FC<FilmCardDescriptionProps> = ({ film }) => {
  return (
    <DivDescription>
      <H2FilmName>{film.name}</H2FilmName>
      <PMeta>
        <SpanRating>Локализация: "{film.localizedName}"</SpanRating>
      </PMeta>
      <PMeta>
        <SpanGenre>{film.genre.join(', ')}</SpanGenre>
        <SpanYear>{film.released}</SpanYear>
      </PMeta>
      <PMeta>
        <SpanRating>Film rating: {film.rating}</SpanRating>
      </PMeta>
    </DivDescription>
  )
}

export default FilmCardDescription

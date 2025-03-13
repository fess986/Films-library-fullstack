import { ImgFilmCardPoster, DivFilmCardPosterContainer } from './styles'

type FilmCardPosterProps = {
  title: string
  img: string
  center?: boolean
}

const FilmCardPoster: React.FC<FilmCardPosterProps> = ({
  img,
  title,
  center = false,
}) => {
  return (
    <DivFilmCardPosterContainer $isCentered={center}>
      <ImgFilmCardPoster src={img} alt={title} />
    </DivFilmCardPosterContainer>
  )
}

export default FilmCardPoster

import { ImgFilmCardPoster, DivFilmCardPosterContainer } from "./styles";

type FilmCardPosterProps = {
  title: string,
  img: string,
}

const FilmCardPoster: React.FC<FilmCardPosterProps> = ({ img, title }) => {
  return (
    <DivFilmCardPosterContainer>
      <ImgFilmCardPoster src={img} alt={title} />
    </DivFilmCardPosterContainer>
  )
}

export default FilmCardPoster;
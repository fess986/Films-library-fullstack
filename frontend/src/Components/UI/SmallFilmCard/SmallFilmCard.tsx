import { FilmProps } from "../../../types/types";
import { SmallFilmCardLink, SmallFilmCardTitle, SmallFilmCardImg, SmallFilmCardContainer, SmallFilmCardArticle } from "./styles";

type SmallFilmCardProps = {
  film: FilmProps,
}

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({ film }) => {
  return (
    <SmallFilmCardArticle>
      <SmallFilmCardContainer>
        <SmallFilmCardImg src={ film.previewImage } alt={film.name} />
      </SmallFilmCardContainer>
      <SmallFilmCardTitle>
        <SmallFilmCardLink to={`/films/${film.id}`} >{film.name}</SmallFilmCardLink>
      </SmallFilmCardTitle>
    </SmallFilmCardArticle>
  )
}

export default SmallFilmCard;
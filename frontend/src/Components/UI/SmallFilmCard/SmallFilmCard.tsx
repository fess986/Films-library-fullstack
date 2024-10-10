import { FilmProps } from "../../../types/types";
import { SmallFilmCardLink, SmallFilmCardTitle, SmallFilmCardImg, SmallFilmCardContainer, SmallFilmCardArticle } from "./styles";
import { setActiveFilm } from "../../../store/films/filmsSlice";
import { useAppDispatch } from "../../../store";

type SmallFilmCardProps = {
  film: FilmProps,
}

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({ film }) => {
const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setActiveFilm(film))
  }

  return (
    <SmallFilmCardArticle>
      <SmallFilmCardContainer onClick={handleClick}>
        <SmallFilmCardImg src={ film.previewImage } alt={film.name} />
      </SmallFilmCardContainer>
      <SmallFilmCardTitle>
        <SmallFilmCardLink onClick={handleClick} to={`/films/${film.id}`} >{film.name}</SmallFilmCardLink>
      </SmallFilmCardTitle>
    </SmallFilmCardArticle>
  )
}

export default SmallFilmCard;
import { FilmProps } from "../../../types/types";
import { AppRoutes } from "../../../const/const";
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
    console.log(film)
  }

  return (
    <SmallFilmCardArticle>
      <SmallFilmCardContainer onClick={handleClick}>
        <SmallFilmCardImg src={ film.previewImage } alt={film.name} />
      </SmallFilmCardContainer>
      <SmallFilmCardTitle>
        <SmallFilmCardLink onClick={handleClick} to={`${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(':id/*', String(film.id))}`} >{film.name}</SmallFilmCardLink>
      </SmallFilmCardTitle>
    </SmallFilmCardArticle>
  )
}

export default SmallFilmCard;
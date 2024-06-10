import { Link } from "react-router-dom";
import { FilmProps } from "../../../types/types";

type SmallFilmCardProps = {
  film: FilmProps,
}

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({ film }) => {
  return (
    <article className="films-list__films-card small-film-card">
      <div className="small-film-card__image">
        <img className="small-film-card__img" src={ film.previewImage } alt={film.name} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link" >{film.name}</Link>
      </h3>
    </article>
  )
}

export default SmallFilmCard;
import { FilmProps } from "../../../types/types";

type FilmCardDescriptionProps = {
  film: FilmProps,
}

const FilmCardDescription: React.FC<FilmCardDescriptionProps> = ({ film }) => {
  return (
    <div className="film-card__description">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre.join(', ')}</span>
        <span className="film-card__year">{film.released}</span>
      </p>
      <p className="film-card__meta">
        <span className="film-card__rating">Film rating: {film.rating}</span>
      </p>
    </div>
  )
}

export default FilmCardDescription;
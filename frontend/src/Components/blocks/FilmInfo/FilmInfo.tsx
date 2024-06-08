import { FilmProps } from "../../../types/types";

type FilmInfoProps = {
  film: FilmProps,
}

const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => {
  console.log(film);
  return (
    <div className="main-page__film-card film-card film-card__container">
        <div className="film-card__poster">
          <img className="film-card__image" src="/images/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" />
        </div>
        <div className="film-card__info">
          <div className="film-card__buttons">
            <button className="film-card__button button button--play" type="button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="film-card__button button button--list" type="button">
              <svg viewBox="0 0 19 20" width={19} height={20}>
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
            </button>
          </div>
          <div className="film-card__description">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">Drama</span>
              <span className="film-card__year">2014</span>
            </p>
            <p className="film-card__meta">
              <span className="film-card__rating">Film rating: 8.1</span>
            </p>
          </div>
        </div>
      </div>
  )
}

export default FilmInfo;
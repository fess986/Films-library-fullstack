import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";

type HeaderFilmCardProps = {
  currentFilm: FilmProps,
  isAuth?: boolean,
}

const HeaderFilmCard: React.FC<HeaderFilmCardProps> = ( {currentFilm, isAuth} ) => {
  return (
    <section className="main-page__hero-image hero">
      <HeroPicture />
      <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>
      <Header isAuth={isAuth}/>
      <FilmInfoCard film={currentFilm} />
          {/* <div className="movie-page__film-card film-card">
            <div className="movie-page__film-card-info film-card__info">
              <div className="film-card__description">
                <h2 className="film-card__title">The Grand Budapest Hotel</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">Drama</span>
                  <span className="film-card__year">2014</span>
                </p>
                <p className="film-card__meta">
                  <span className="film-card__rating">Film rating: 8.1</span>
                </p>
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
              </div>
            </div>
          </div> */}
        </section>
  )
};

export default HeaderFilmCard;
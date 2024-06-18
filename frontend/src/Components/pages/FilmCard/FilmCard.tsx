import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmMenu from "../../blocks/FilmMenu/FilmMenu";

import { FilmProps } from "../../../types/types";
import { FilmMenuList } from "../../../const/const";
type FilmCardProps = {
  film: FilmProps
}

const FilmCard: React.FC<FilmCardProps> = ( {film} ) => {
  return (
    <>
      <section className="movie-page__additional-film-info additional-film-info">

        <FilmCardPoster title={film.name} img={film.posterImage} />

        <div className="additional-film-info__info">

          <FilmMenu items={FilmMenuList} activeItem={FilmMenuList[0]}/>

          {/* <ul className="additional-film-info__film-menu film-menu">
            <li className="film-menu__item film-menu__item--active">
              <a href className="film-menu__link">Overview</a>
            </li>
            <li className="film-menu__item">
              <a href className="film-menu__link">Details</a>
            </li>
            <li className="film-menu__item">
              <a href className="film-menu__link">Reviews</a>
            </li>
          </ul> */}
          <div className="additional-film-info__overview overview">
            <div className="overview__rating">
              <span className="overview__rating-value">8.1</span>
              <span className="overview__rating-text-value">very good</span>
              <span className="overview__rating-count">количество оценок</span>
            </div>
            <div className="overview__description">
              <p className="overview__description-text">In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
              </p>
              <p className="overview__description-text">In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
              </p>
            </div>
            <div className="overview__director">
              <span className="overview__director-title">Director:</span>
              <span className="overview__director-name">Wes Anderson</span>
            </div>
            <div className="overview__starring">
              <span className="overview__starring-title">Starring:</span>
              <span className="overview__starring-names">Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other </span>
            </div>
          </div>
        </div>

      </section>


      <section className="movie-page__more-films more-films">
        <h2 className="visually-hidden">More films like this</h2>
        <h2 className="more-films__title">More films like this</h2>
        <div className="catalog__films-list films-list">
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/macbeth.jpg" alt="Macbeth" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Macbeth</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/aviator.jpg" alt="Aviator" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Aviator</a>
            </h3>
          </article>
        </div>
      </section>
    </>
  )

};

export default FilmCard;
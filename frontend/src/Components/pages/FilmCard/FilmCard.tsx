import { Routes, Route } from "react-router-dom";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmMenu from "../../blocks/FilmMenu/FilmMenu";
import FilmDetails from "../../blocks/FilmCard/FilmDetails/FilmDetails";
import FilmOverview from "../../blocks/FilmCard/FilmOverview/FilmOverview";
import FilmReviews from "../../blocks/FilmCard/FilmReviews/FilmReviews";
import { FilmProps } from "../../../types/types";
import { FilmMenuList } from "../../../const/const";
type FilmCardProps = {
  film: FilmProps
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <>
      <section className="movie-page__additional-film-info additional-film-info">

        <FilmCardPoster title={film.name} img={film.posterImage} />

        <div className="additional-film-info__info">

          <FilmMenu items={FilmMenuList} />

          <Routes>
            <Route path="/" element={<FilmOverview film={film} />} />
            <Route path={FilmMenuList[0].toLowerCase()} element={<FilmOverview film={film} />} />
            <Route path={FilmMenuList[1].toLowerCase()} element={<FilmDetails film={film} />} />
            <Route path={FilmMenuList[2].toLowerCase()} element={<FilmReviews film={film}/>} />
          </Routes>

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
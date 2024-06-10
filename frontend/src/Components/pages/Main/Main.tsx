import { FilmProps } from "../../../types/types";
import FilmList from "../../blocks/FilmList/FilmList";
import GenreList from "../../blocks/GenreList/GenreList";

type MainProps = {
  films: FilmProps[];
}

const Main: React.FC<MainProps> = ({ films }) => {
  return (
    <div className="main-page__content main-page-content">
      <section className="main-page-content__catalog catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films={films} />

        <FilmList films={films} />

        <div className="catalog__more-films-button more-films-button">
          <button className="more-films__button" type="button">Show more</button>
        </div>
      </section>
    </div>
  )
};

export default Main;
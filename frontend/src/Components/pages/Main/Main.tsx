import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";
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
        <MoreFilmsButton />

      </section>
    </div>
  )
};

export default Main;
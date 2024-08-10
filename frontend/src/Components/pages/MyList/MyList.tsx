import FilmList from "../../blocks/FilmList/FilmList";
import { FilmProps } from "../../../types/types";

type MyListProps = {
  films: FilmProps[],
}

const MyList: React.FC<MyListProps> = ( { films } ) => {
  console.log(films);
  return (
    <div className="main-page__content main-page-content">
      <section className="main-page-content__catalog catalog">
        <h2 className="catalog__title visually-hidden">My list</h2>
        <h2 className="catalog__title">My list</h2>

        <FilmList films={films} />

        <div className="catalog__more-films-button more-films-button">
          <button className="more-films__button" type="button">Show more</button>
        </div>
      </section>
    </div>

  )
};

export default MyList;
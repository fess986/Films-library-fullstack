import FilmList from "../../blocks/FilmList/FilmList";
import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";

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

        <MoreFilmsButton />

      </section>
    </div>

  )
};

export default MyList;
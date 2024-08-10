import FilmList from "../../blocks/FilmList/FilmList";
import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";

import { H2Hidden, H2CatalogTitle } from "./styles";

type MyListProps = {
  films: FilmProps[],
}

const MyList: React.FC<MyListProps> = ( { films } ) => {
  console.log(films);
  return (
    <div className="main-page__content main-page-content">
      <section className="main-page-content__catalog catalog">

        <H2Hidden as="h2">My list</H2Hidden>
        <H2CatalogTitle>My list</H2CatalogTitle>

        <FilmList films={films} />

        <MoreFilmsButton />

      </section>
    </div>

  )
};

export default MyList;
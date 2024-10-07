import { useSelector } from "react-redux";

import { getIsFilmsLoaded } from "../../../store/app/appSelectors";
import { getFilteredFilmList } from "../../../store/films/filmsSelector";

import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";
import FilmList from "../../blocks/FilmList/FilmList";
import GenreList from "../../blocks/GenreList/GenreList";
import { H2Hidden, SectionCatalog, DivCatalogContent } from "./styles";
import { getFilmsShownCount } from "../../../store/app/appSelectors";

type MainProps = {
  films: FilmProps[];
}

const Main: React.FC<MainProps> = ({ films }) => {
  const filteredFilmList = useSelector(getFilteredFilmList);  // получаем отфильтрованный по активному жанру список фильмов
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  const filmsShownCount = useSelector(getFilmsShownCount);  // получаем количество отображаемых фильмов
  const shownFilms = filteredFilmList.slice(0, filmsShownCount);  // учитываем количество отображаемых фильмов

  return (
    <DivCatalogContent>
      <SectionCatalog>
        <H2Hidden as="h2">Catalog</H2Hidden>
        <GenreList films={films} />
        {isFilmsLoaded ? <FilmList films={shownFilms}/> : <div>Loading...</div>}
        <MoreFilmsButton />
      </SectionCatalog>
    </DivCatalogContent>
    
  )
};

export default Main;
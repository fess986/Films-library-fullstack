import SmallFilmCard from "../../UI/SmallFilmCard/SmallFilmCard";
import { DivFilmList } from "./styles";

import { getFilteredFilmList } from "../../../store/films/filmsSelector";
import { getFilmsShownCount, getIsFilmsLoaded } from "../../../store/app/appSelectors";

import { useSelector } from "react-redux";

const FilmList: React.FC = () => {

  const filteredFilmList = useSelector(getFilteredFilmList);  // получаем отфильтрованный по активному жанру список фильмов
  const filmsShownCount = useSelector(getFilmsShownCount);  // получаем количество отображаемых фильмов
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);

  return (

    <DivFilmList>
      
      {!isFilmsLoaded && <p>Loading...</p>}
      {isFilmsLoaded && filteredFilmList.slice(0, filmsShownCount).map(film => <SmallFilmCard key={film.id} film={film} />)}

    </DivFilmList>
  )
}

export default FilmList;
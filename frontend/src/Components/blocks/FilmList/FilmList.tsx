import SmallFilmCard from "../../UI/SmallFilmCard/SmallFilmCard";
import { DivFilmList } from "./styles";

import { getFilteredFilmList } from "../../../store/films/filmsSelector";
import { getFilmsShownCount } from "../../../store/app/appSelectors";
import { useSelector } from "react-redux";

const FilmList: React.FC = () => {

  const filteredFilmList = useSelector(getFilteredFilmList);  // получаем отфильтрованный по активному жанру список фильмов

  const filmsShownCount = useSelector(getFilmsShownCount);  // получаем количество отображаемых фильмов

  return (
    <DivFilmList>
      {filteredFilmList.slice(0, filmsShownCount).map(film => <SmallFilmCard key={film.id} film={film} />)}
    </DivFilmList>
  )
}

export default FilmList;
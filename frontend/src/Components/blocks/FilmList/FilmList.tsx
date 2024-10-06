import SmallFilmCard from "../../UI/SmallFilmCard/SmallFilmCard";
import { DivFilmList } from "./styles";

import { getFilmsShownCount } from "../../../store/app/appSelectors";
import { FilmProps } from "../../../types/types";

import { useSelector } from "react-redux";

type FilmListProps = {
  films: FilmProps[]
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {

  const filmsShownCount = useSelector(getFilmsShownCount);  // получаем количество отображаемых фильмов

  return (
    <DivFilmList>
      {films.slice(0, filmsShownCount).map(film => <SmallFilmCard key={film.id} film={film} />)}
    </DivFilmList>
  )
}

export default FilmList;
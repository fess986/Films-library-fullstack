import { useSelector } from "react-redux";

import { UlGenreList } from "./styles";
import {ALL_GENRES} from "../../../const/const";
import { getActiveGenre } from "../../../store/app/appSelectors";
import { FilmProps } from "../../../types/types";
import GenreItem from "../../UI/GenreItem/GenreItem";



type GenreListProps = {
  films: FilmProps[]
}

const getUniqueGenres = (films: FilmProps[]) : string[] => {
  const allGenres = films.flatMap(film => film.genre);  // делаем плоский массив жанров
  const uniqueGenres = [...new Set(allGenres)];  // убираем повторяющиеся жанры
  return uniqueGenres;
};

const GenreList: React.FC<GenreListProps> = ({films}) => {
const activeGenre = useSelector(getActiveGenre);

const uniqueGenres = getUniqueGenres(films);

  return (
    <UlGenreList>
      <GenreItem genre={ALL_GENRES} active={activeGenre === ALL_GENRES} />
      {uniqueGenres && uniqueGenres.map(genre => <GenreItem key={genre} genre={genre} active={activeGenre === genre}/>)}
    </UlGenreList>
  )
}

export default GenreList;
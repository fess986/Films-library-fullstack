import { FilmProps } from "../../../types/types";
import GenreItem from "../../UI/GenreItem/GenreItem";
import { UlGenreList } from "./styles";

import { useSelector } from "react-redux";
import { getActiveGenre } from "../../../store/app/appSelectors";

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
console.log(activeGenre)

const uniqueGenres = getUniqueGenres(films);

  return (
    <UlGenreList>
      <GenreItem genre={'All genres'} active />
      {uniqueGenres && uniqueGenres.map(genre => <GenreItem key={genre} genre={genre} active={false}/>)}
    </UlGenreList>
  )
}

export default GenreList;
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
const uniqueGenres = getUniqueGenres(films);

  return (
    <ul className="catalog__genres-list genres-list">
      <GenreItem genre={'All genres'} active />
      {uniqueGenres && uniqueGenres.map(genre => <GenreItem key={genre} genre={genre} />)}
    </ul>
  )
}

export default GenreList;
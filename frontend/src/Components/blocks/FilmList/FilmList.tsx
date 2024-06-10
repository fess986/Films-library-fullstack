import { FilmProps } from "../../../types/types";
import SmallFilmCard from "../../UI/SmallFilmCard/SmallFilmCard";

type FilmListProps = {
  films: FilmProps[],
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <div className="catalog__films-list films-list">

      <SmallFilmCard film={films[3]} />

      {films.slice(0, 7).map(film => <SmallFilmCard key={film.id} film={film} />)}

    </div>
  )
}

export default FilmList;
import { FilmProps } from "../../../types/types";
import SmallFilmCard from "../../UI/SmallFilmCard/SmallFilmCard";
import { DivFilmList } from "./styles";

type FilmListProps = {
  films: FilmProps[],
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <DivFilmList>
      <SmallFilmCard film={films[3]} />

      {films.slice(0, 7).map(film => <SmallFilmCard key={film.id} film={film} />)}
    </DivFilmList>
  )
}

export default FilmList;
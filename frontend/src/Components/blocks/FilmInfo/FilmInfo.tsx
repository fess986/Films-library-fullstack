import { useSelector } from "react-redux";

import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmButtons from "../FilmButtons/FilmButtons";
import FilmCardDescription from "../FilmCardDescription/FilmCardDescription";
import { DivFilmInfo, DivFilmCard } from "./styles";
import { getIsFilmsLoaded } from "../../../store/app/appSelectors";

type FilmInfoProps = {
  film: FilmProps | null,
}

const FilmInfo: React.FC<FilmInfoProps> = ({film}) => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  console.log(film)

  if (!isFilmsLoaded || !film) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <DivFilmCard >
      <FilmCardPoster img={film.posterImage} title={film.name} />
      <DivFilmInfo>
        <FilmCardDescription film={film} />
        <FilmButtons details  />
      </DivFilmInfo>
    </DivFilmCard>
  )
}

export default FilmInfo;
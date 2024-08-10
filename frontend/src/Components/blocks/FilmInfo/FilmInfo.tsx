import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmButtons from "../FilmButtons/FilmButtons";
import FilmCardDescription from "../FilmCardDescription/FilmCardDescription";
import { DivFilmInfo, DivFilmCard } from "./styles";

type FilmInfoProps = {
  film: FilmProps,
}

const FilmInfo: React.FC<FilmInfoProps> = ({film}) => {
  return (
    <DivFilmCard >
      <FilmCardPoster img={film.posterImage} title={film.name} />

      <DivFilmInfo>
        <FilmCardDescription film={film} />
        <FilmButtons callback={() => {console.log('callback1')}} />
      </DivFilmInfo>
    </DivFilmCard>
  )
}

export default FilmInfo;
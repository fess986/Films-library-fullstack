import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmButtons from "../FilmButtons/FilmButtons";
import FilmCardDescription from "../FilmCardDescription/FilmCardDescription";

type FilmInfoProps = {
  film: FilmProps,
}

const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => {
  return (
    <div className="main-page__film-card film-card film-card__container">

    <FilmCardPoster img={film.posterImage} title={film.name} />

        <div className="film-card__info">
        <FilmButtons />
        <FilmCardDescription film={film} />
        </div>
      </div>
  )
}

export default FilmInfo;
import { useNavigate } from "react-router-dom";

import { FilmProps } from "../../../types/types";
import FilmButtons from "../FilmButtons/FilmButtons";
import FilmCardDescription from "../FilmCardDescription/FilmCardDescription";
import { AppRoutes } from "../../../const/const";

import { DivFilmInfoCard, DivFilmCardContainer } from "./styles";

type FilmInfoProps = {
  film: FilmProps,
}

const FilmInfoCard: React.FC<FilmInfoProps> = ({ film }) => {
  const navigate = useNavigate();

  return (
    <DivFilmCardContainer >
      <DivFilmInfoCard>
        <FilmCardDescription film={film} />
        <FilmButtons callback={() => {navigate(`${AppRoutes.ROOT}${AppRoutes.MY_LIST}`)}}/>
      </DivFilmInfoCard>
    </DivFilmCardContainer>
  )
}

export default FilmInfoCard;
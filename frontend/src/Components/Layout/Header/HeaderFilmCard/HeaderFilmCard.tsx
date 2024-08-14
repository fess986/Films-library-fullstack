import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";
import { SectionHeroImage } from "./styles";

type HeaderFilmCardProps = {
  currentFilm: FilmProps,
  isAuth?: boolean,
}

const HeaderFilmCard: React.FC<HeaderFilmCardProps> = ({ currentFilm, isAuth }) => {
  return (
    <SectionHeroImage>
      <HeroPicture />
      <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>
      <Header isAuth={isAuth} />
      <FilmInfoCard film={currentFilm} />
    </SectionHeroImage>
  )
};

export default HeaderFilmCard;
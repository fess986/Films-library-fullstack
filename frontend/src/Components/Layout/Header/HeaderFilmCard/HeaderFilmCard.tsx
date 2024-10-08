import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";
import { SectionHeroImage } from "./styles";

type HeaderFilmCardProps = {
  currentFilm: FilmProps,
}

const HeaderFilmCard: React.FC<HeaderFilmCardProps> = ({ currentFilm }) => {
  return (
    <SectionHeroImage>
      <HeroPicture />
      <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>
      <Header />
      <FilmInfoCard film={currentFilm} />
    </SectionHeroImage>
  )
};

export default HeaderFilmCard;
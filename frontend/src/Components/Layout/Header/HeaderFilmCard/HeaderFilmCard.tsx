import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";
import { SectionHeroImage } from "./styles";
import { getActiveFilm } from "../../../../store/films/filmsSelector";
import { useSelector } from "react-redux";

const HeaderFilmCard: React.FC = () => {
  const currentFilm : FilmProps | null = useSelector(getActiveFilm);
  console.log(currentFilm)

  return (
    <SectionHeroImage>
      <HeroPicture />
      {currentFilm && <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>}
      <Header />
      {currentFilm && <FilmInfoCard film={currentFilm} />}
    </SectionHeroImage>
  )
};

export default HeaderFilmCard;
import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";
import { SectionHeroImage } from "./styles";

import useActiveFilm from "../../../../hooks/useActiveFilm";

const HeaderFilmCard: React.FC = () => {
  const {currentFilm, isActiveFilmLoaded} = useActiveFilm();

  return (
    <SectionHeroImage>
      <HeroPicture />
      {currentFilm && isActiveFilmLoaded && <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>}
      <Header />
      {currentFilm && <FilmInfoCard film={currentFilm} />}
    </SectionHeroImage>
  )
};

export default HeaderFilmCard;
import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import Header from "../../../blocks/Header/Header";
import FilmInfo from "../../../blocks/FilmInfo/FilmInfo";
// import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components/Title/H1Hidden";
import { SectionHero } from "./styles";
import { getActiveFilm } from "../../../../store/films/filmsSelector";
import { useSelector } from "react-redux";

const HeaderMain: React.FC = (  ) => {
  const currentFilm = useSelector(getActiveFilm);

  return (
    <SectionHero>
      <HeroPicture />
      <H1Hidden>Films Library</H1Hidden>
      <Header />
      <FilmInfo film={currentFilm} />
    </SectionHero>
  )
};

export default HeaderMain;
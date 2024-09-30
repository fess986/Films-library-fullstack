import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import Header from "../../../blocks/Header/Header";
import FilmInfo from "../../../blocks/FilmInfo/FilmInfo";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components/Title/H1Hidden";
import { SectionHero } from "./styles";

import { AuthStatus } from "../../../../const/const";

type HeaderMainProps = {
  isAuth: AuthStatus,
  currentFilm: FilmProps,
}
const HeaderMain: React.FC<HeaderMainProps> = ( { isAuth, currentFilm } ) => {
  return (
    <SectionHero>
      <HeroPicture />
      <H1Hidden>Films Library</H1Hidden>
      <Header isAuth={isAuth}/>
      <FilmInfo film={currentFilm} />
    </SectionHero>
  )
};

export default HeaderMain;
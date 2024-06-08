import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import Header from "../../../blocks/Header/Header";
import FilmInfo from "../../../blocks/FilmInfo/FilmInfo";
import { FilmProps } from "../../../../types/types";

type HeaderMainProps = {
  isAuth?: boolean,
  currentFilm: FilmProps,
}
const HeaderMain: React.FC<HeaderMainProps> = ( { isAuth, currentFilm } ) => {
  return (
    <section className="main-page__hero-image hero">

      <HeroPicture />

      <h1 className="visually-hidden">Films Library</h1>

      <Header isAuth={isAuth}/>

      <FilmInfo film={currentFilm} />

    </section>
  )
};

export default HeaderMain;
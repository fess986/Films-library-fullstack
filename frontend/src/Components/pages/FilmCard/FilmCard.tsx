import { Routes, Route } from "react-router-dom";

import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmMenu from "../../blocks/FilmMenu/FilmMenu";
import FilmDetails from "../../blocks/FilmCard/FilmDetails/FilmDetails";
import FilmOverview from "../../blocks/FilmCard/FilmOverview/FilmOverview";
import FilmReviews from "../../blocks/FilmCard/FilmReviews/FilmReviews";
import { FilmProps } from "../../../types/types";
import { FilmMenuList } from "../../../const/const";
import { Reviews } from "../../../mock/reviews";
import  FilmList  from "../../blocks/FilmList/FilmList";
import { Films } from "../../../mock/films";

import { DivAdditionalFilmInfo, DivAdditionalFilmContainer, SectionMoreFilms, H2MoreFilmsTitle } from "./styles";
import { H1Hidden } from "../../styled/Components";
type FilmCardProps = {
  film: FilmProps
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <>
      <DivAdditionalFilmContainer>
        <FilmCardPoster title={film.name} img={film.posterImage} />

        <DivAdditionalFilmInfo>

          <FilmMenu items={FilmMenuList} />

          <Routes>
            <Route path="/" element={<FilmDetails film={film} />} />
            <Route path={FilmMenuList[0].toLowerCase()} element={<FilmOverview film={film} />} />
            <Route path={FilmMenuList[1].toLowerCase()} element={<FilmDetails film={film} />} />
            <Route path={FilmMenuList[2].toLowerCase()} element={<FilmReviews reviews={Reviews}/>} />
          </Routes>
        </DivAdditionalFilmInfo>
      </DivAdditionalFilmContainer>

      <SectionMoreFilms>
        <H1Hidden as={"h2"}>More films like this</H1Hidden>
        <H2MoreFilmsTitle>More films like this</H2MoreFilmsTitle>

      <FilmList films={Films} />
      </SectionMoreFilms>
    </>
  )

};

export default FilmCard;
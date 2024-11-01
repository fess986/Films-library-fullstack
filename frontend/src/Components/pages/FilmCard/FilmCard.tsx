import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchReviews } from "../../../store/api-actions";

import { useAppDispatch } from "../../../store";

import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import FilmMenu from "../../blocks/FilmMenu/FilmMenu";
import FilmDetails from "../../blocks/FilmCard/FilmDetails/FilmDetails";
import FilmOverview from "../../blocks/FilmCard/FilmOverview/FilmOverview";
import FilmReviews from "../../blocks/FilmCard/FilmReviews/FilmReviews";
import { FilmProps } from "../../../types/types";
import { FilmMenuList } from "../../../const/const";
import  FilmList  from "../../blocks/FilmList/FilmList";

import { DivAdditionalFilmInfo, DivAdditionalFilmContainer, SectionMoreFilms, H2MoreFilmsTitle } from "./styles";
import { H1Hidden } from "../../styled/Components";

import { useSelector } from "react-redux";
import { getIsFilmsLoaded } from "../../../store/app/appSelectors";
import { getFilmList, getActiveFilm } from "../../../store/films/filmsSelector";
import { getReviewsList, getIsReviewsLoaded } from "../../../store/reviews/reviewsSelector";

const FilmCard: React.FC = () => {
  const dispatch = useAppDispatch();

  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  const films = useSelector(getFilmList);

  const activeFilm : FilmProps | null = useSelector(getActiveFilm);

  const isReviewsLoaded = useSelector(getIsReviewsLoaded);
  const reviews = useSelector(getReviewsList);

  useEffect(() => {
    dispatch(fetchReviews(activeFilm?.id || 0 ));
  }, [dispatch, activeFilm?.id]);

  return (
    <>
      <DivAdditionalFilmContainer>
        <FilmCardPoster title={activeFilm?.name ? activeFilm.name : ""} img={activeFilm?.posterImage ? activeFilm.posterImage : ""} />

        <DivAdditionalFilmInfo>

          <FilmMenu items={FilmMenuList} />

          <Routes>
            <Route path="/" element={<FilmOverview film={activeFilm} />} />
            <Route path={FilmMenuList[0].toLowerCase()} element={<FilmOverview film={activeFilm} />} />
            <Route path={FilmMenuList[1].toLowerCase()} element={<FilmDetails film={activeFilm} />} />
            <Route path={FilmMenuList[2].toLowerCase()} element={isReviewsLoaded ? <FilmReviews reviews={reviews} /> : <div>Loading...</div>} />
          </Routes>
        </DivAdditionalFilmInfo>
      </DivAdditionalFilmContainer>

      <SectionMoreFilms>
        <H1Hidden as={"h2"}>More films like this</H1Hidden>
        <H2MoreFilmsTitle>More films like this</H2MoreFilmsTitle>

        {isFilmsLoaded ? <FilmList films={films} /> : <div>Loading...</div>}
      </SectionMoreFilms>
    </>
  )

};

export default FilmCard;
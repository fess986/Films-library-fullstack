import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { FilmProps } from "../../../../types/types";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import FilmInfoCard from "../../../blocks/FilmInfoCard/FilmInfoCard";
import { SectionHeroImage } from "./styles";
import { getActiveFilm, getFilmList } from "../../../../store/films/filmsSelector";
import {setActiveFilm} from "../../../../store/films/filmsSlice";
import { getIsFilmsLoaded } from "../../../../store/app/appSelectors";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import { useEffect } from "react";

const HeaderFilmCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const films = useSelector(getFilmList);
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);

  useEffect(() => {
    id && dispatch(setActiveFilm(films[Number(id)]));
  })

  const currentFilm : FilmProps | null = useSelector(getActiveFilm);

  return (
    <SectionHeroImage>
      <HeroPicture />
      {currentFilm && isFilmsLoaded && <H1Hidden>{`${currentFilm.name} Page`}</H1Hidden>}
      <Header />
      {currentFilm && isFilmsLoaded && <FilmInfoCard film={currentFilm} />}
    </SectionHeroImage>
  )
};

export default HeaderFilmCard;
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import Header from "../../../blocks/Header/Header";
import FilmInfo from "../../../blocks/FilmInfo/FilmInfo";
import { H1Hidden } from "../../../styled/Components/Title/H1Hidden";
import { SectionHero } from "./styles";

import { getActiveFilm } from "../../../../store/films/filmsSelector";
import { getFilmList } from "../../../../store/films/filmsSelector";
import { getIsActiveFilmLoaded } from "../../../../store/app/appSelectors";

import { useAppDispatch } from "../../../../store";
import {setActiveFilm} from "../../../../store/films/filmsSlice";
import { setIsActiveFilmLoaded } from "../../../../store/app/appSlice";


const HeaderMain: React.FC = () => {

  const dispatch = useAppDispatch();
  const films = useSelector(getFilmList);

  // мемоизируем randomFilm для того чтобы передать в список зависимостей
  const randomFilm = useMemo(() => {
    return films[Math.floor(Math.random() * films.length)];
  }, [films]);

  const isActiveFilmLoaded = useSelector(getIsActiveFilmLoaded);
  
  // устанавливаем активный фильм только если нет уже загруженного
  useEffect(() => {
    if (!isActiveFilmLoaded && randomFilm) {
      dispatch(setActiveFilm(randomFilm));
      dispatch(setIsActiveFilmLoaded(true));
    }
  }, [dispatch, randomFilm, isActiveFilmLoaded]);

  const currentFilm = useSelector(getActiveFilm);

  return (
    <SectionHero>
      <HeroPicture />
      <H1Hidden>Films Library</H1Hidden>
      <Header />
      {currentFilm && <FilmInfo film={currentFilm} />}
    </SectionHero>
  )
};

export default HeaderMain;
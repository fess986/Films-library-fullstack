import { useMemo , useEffect } from "react";
import { useSelector } from "react-redux";


import { SectionHero } from "./styles";
import { useAppDispatch } from "../../../../store";
import { getIsActiveFilmLoaded } from "../../../../store/app/appSelectors";
import { setIsActiveFilmLoaded } from "../../../../store/app/appSlice";
import { getActiveFilm , getFilmList } from "../../../../store/films/filmsSelector";
import {setActiveFilm} from "../../../../store/films/filmsSlice";
import FilmInfo from "../../../blocks/FilmInfo/FilmInfo";
import Header from "../../../blocks/Header/Header";
import { H1Hidden } from "../../../styled/Components/Title/H1Hidden";
import HeroPicture from "../../../UI/HeroPicture/HeroPicture";


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
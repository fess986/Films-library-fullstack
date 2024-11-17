import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../store";

import {  } from "../store/app/appSelectors";
import { getFilmList } from "../store/films/filmsSelector";

import { setActiveFilm } from "../store/films/filmsSlice";
import { setIsActiveFilmLoaded } from "../store/app/appSlice";

import { FilmProps } from "../types/types";

type UseActiveFilm = {
  currentFilm: FilmProps | null;
  isActiveFilmLoaded: boolean;
  id: string | undefined;
};

const useActiveFilm = () : UseActiveFilm => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const films = useSelector(getFilmList);

  const [currentFilm, setCurrentFilm] = useState<FilmProps | null>(null);
  const [isActiveFilmLoaded, setIsActiveFilmLoadedState] = useState<boolean>(false);

  useEffect(() => {
    const activeFilmFromParams = films.find((film) => film.id === Number(id)) || null;

    if ((films.length !== 0) && (!activeFilmFromParams)) {
      console.log('нет активного фильма');
      dispatch(setIsActiveFilmLoaded(false));
    }

    if (activeFilmFromParams) {
      setCurrentFilm(activeFilmFromParams);
      setIsActiveFilmLoadedState(true);
      dispatch(setActiveFilm(activeFilmFromParams));
    } else {
      setCurrentFilm(null);
      setIsActiveFilmLoadedState(false);
      dispatch(setIsActiveFilmLoaded(false));
    }
  }, [id, films, dispatch]);


  return { id, currentFilm, isActiveFilmLoaded };
};

export default useActiveFilm;
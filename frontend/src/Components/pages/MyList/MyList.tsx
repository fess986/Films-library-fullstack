import FilmList from "../../blocks/FilmList/FilmList";
import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";

import { useSelector } from "react-redux";
import { getIsFilmsLoaded } from "../../../store/app/appSelectors";
import { getFavoriteFilmList } from "../../../store/films/filmsSelector";

import { H2Hidden, H2CatalogTitle, SectionCatalog, SectionCatalogContainer } from "./styles";

const MyList: React.FC = ( ) => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  const favoriteFilms : FilmProps[] = useSelector(getFavoriteFilmList);

  return (
    <SectionCatalogContainer>
      <SectionCatalog>

        <H2Hidden as="h2">My list</H2Hidden>
        <H2CatalogTitle>My list</H2CatalogTitle>

        {isFilmsLoaded ? <FilmList films={favoriteFilms} /> : <div>Loading...</div>}

        <MoreFilmsButton />

      </SectionCatalog>
    </SectionCatalogContainer>

  )
};

export default MyList;
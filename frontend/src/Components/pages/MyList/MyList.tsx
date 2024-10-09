import FilmList from "../../blocks/FilmList/FilmList";
import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";

import { useSelector } from "react-redux";
import { getIsFilmsLoaded } from "../../../store/app/appSelectors";

import { H2Hidden, H2CatalogTitle, SectionCatalog, SectionCatalogContainer } from "./styles";

type MyListProps = {
  films: FilmProps[],
}

const MyList: React.FC<MyListProps> = ( { films } ) => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  // console.log(films);

  return (
    <SectionCatalogContainer>
      <SectionCatalog>

        <H2Hidden as="h2">My list</H2Hidden>
        <H2CatalogTitle>My list</H2CatalogTitle>

        {isFilmsLoaded ? <FilmList films={films} /> : <div>Loading...</div>}

        <MoreFilmsButton />

      </SectionCatalog>
    </SectionCatalogContainer>

  )
};

export default MyList;
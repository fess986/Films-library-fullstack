import { FilmProps } from "../../../types/types";
import MoreFilmsButton from "../../UI/Buttons/MoreFilmsButton/MoreFilmsButton";
import FilmList from "../../blocks/FilmList/FilmList";
import GenreList from "../../blocks/GenreList/GenreList";
import { H2Hidden, SectionCatalog, DivCatalogContent } from "./styles";

type MainProps = {
  films: FilmProps[];
}

const Main: React.FC<MainProps> = ({ films }) => {
  return (
    <DivCatalogContent>
      <SectionCatalog>
        <H2Hidden as="h2">Catalog</H2Hidden>
        <GenreList films={films} />
        <FilmList />
        <MoreFilmsButton />
      </SectionCatalog>
    </DivCatalogContent>
    
  )
};

export default Main;
import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";
import ButtonDetails from "../../UI/Buttons/ButtonDetails/ButtonDetails";
import { DivFilmButtons } from "./styles";

type FilmButtonsProps = {
  details?: boolean,
}
const FilmButtons: React.FC<FilmButtonsProps> = ( {details} ) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={1}/>
      <ButtonAdd />
      {details && <ButtonDetails  />}
    </DivFilmButtons>
  )
}

export default FilmButtons;
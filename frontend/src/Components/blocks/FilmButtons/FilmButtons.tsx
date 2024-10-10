import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";
import ButtonDetails from "../../UI/Buttons/ButtonDetails/ButtonDetails";
import { DivFilmButtons } from "./styles";

type FilmButtonsProps = {
  callback: () => void,
  details?: boolean,
}
const FilmButtons: React.FC<FilmButtonsProps> = ( {callback, details} ) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={1}/>
      <ButtonAdd callback={callback} />
      {details && <ButtonDetails  />}
    </DivFilmButtons>
  )
}

export default FilmButtons;
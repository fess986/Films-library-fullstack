import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";
import { DivFilmButtons } from "./styles";

type FilmButtonsProps = {
  callback: () => void
}
const FilmButtons: React.FC<FilmButtonsProps> = ( {callback} ) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={1}/>
      <ButtonAdd callback={callback} />
    </DivFilmButtons>
  )
}

export default FilmButtons;
import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";
import { DivFilmButtons } from "./styles";

const FilmButtons: React.FC = () => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={1}/>
      <ButtonAdd />
    </DivFilmButtons>
  )
}

export default FilmButtons;
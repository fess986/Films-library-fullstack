import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";
import ButtonDetails from "../../UI/Buttons/ButtonDetails/ButtonDetails";
import ButtonAddReview from "../../UI/Buttons/ButtonAddReview/ButtonAddReview";
import { DivFilmButtons } from "./styles";

type FilmButtonsProps = {
  details?: boolean,
  addReview?: boolean,
  id: number
}
const FilmButtons: React.FC<FilmButtonsProps> = ( {details, addReview, id} ) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={id}/>
      <ButtonAdd />
      {details && <ButtonDetails  />}
      {addReview && <ButtonAddReview />}
    </DivFilmButtons>
  )
}

export default FilmButtons;
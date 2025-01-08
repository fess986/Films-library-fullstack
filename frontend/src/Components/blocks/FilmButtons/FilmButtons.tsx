import { DivFilmButtons } from './styles'
import ButtonAdd from '../../UI/Buttons/ButtonAdd/ButtonAdd'
import ButtonAddReview from '../../UI/Buttons/ButtonAddReview/ButtonAddReview'
import ButtonDetails from '../../UI/Buttons/ButtonDetails/ButtonDetails'
import ButtonPlay from '../../UI/Buttons/ButtonPlay/ButtonPlay'

type FilmButtonsProps = {
  details?: boolean
  addReview?: boolean
  id: string
}
const FilmButtons: React.FC<FilmButtonsProps> = ({
  details,
  addReview,
  id,
}) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={id} />
      <ButtonAdd />
      {details && <ButtonDetails />}
      {addReview && <ButtonAddReview />}
    </DivFilmButtons>
  )
}

export default FilmButtons

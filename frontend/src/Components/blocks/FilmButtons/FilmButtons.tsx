import { DivFilmButtons } from './styles'
import ButtonAdd from '../../UI/Buttons/ButtonAdd/ButtonAdd'
import ButtonAddReview from '../../UI/Buttons/ButtonAddReview/ButtonAddReview'
import ButtonDetails from '../../UI/Buttons/ButtonDetails/ButtonDetails'
import ButtonPlay from '../../UI/Buttons/ButtonPlay/ButtonPlay'
import ButtonUserPage from '../../UI/Buttons/ButtonUserPage/ButtonUserPage'

type FilmButtonsProps = {
  details?: boolean
  addReview?: boolean
  userPage?: boolean
  id: string
}
const FilmButtons: React.FC<FilmButtonsProps> = ({
  details,
  addReview,
  userPage,
  id,
}) => {
  return (
    <DivFilmButtons>
      <ButtonPlay id={id} />
      <ButtonAdd />
      {details && <ButtonDetails />}
      {addReview && <ButtonAddReview />}
      {userPage && <ButtonUserPage />}
    </DivFilmButtons>
  )
}

export default FilmButtons

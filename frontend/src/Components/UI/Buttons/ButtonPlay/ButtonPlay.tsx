import { useNavigate } from 'react-router-dom'

import { AppRoutes } from '../../../../const/const'
import { useAppDispatch } from '../../../../store'
import { resetFilmsShownCount } from '../../../../store/app/appSlice'
import { StyledButton } from '../styles'

type ButtonPlayProps = {
  id: string
}
const ButtonPlay: React.FC<ButtonPlayProps> = ({ id }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <StyledButton
      onClick={() => {
        // меняем путь AppRoutes.PLAYER вместо :id подставляем конкретный id из props
        navigate(
          `${AppRoutes.ROOT}${AppRoutes.PLAYER.replace(':id', String(id))}`
        )
        dispatch(resetFilmsShownCount())
      }}
    >
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </StyledButton>
  )
}

export default ButtonPlay

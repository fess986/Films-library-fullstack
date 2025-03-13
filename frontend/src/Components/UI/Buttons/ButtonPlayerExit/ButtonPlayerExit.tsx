import { ButtonExit } from './styles'
import { AppRoutes } from '../../../../const/const'
import { useAppDispatch } from '../../../../store'
import { resetFilmsShownCount } from '../../../../store/app/appSlice'
import browserHistory from '../../../../utils/browser-history'

const ButtonPlayerExit: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <ButtonExit
      onClick={() => {
        dispatch(resetFilmsShownCount())
        browserHistory.push(AppRoutes.ROOT)
      }}
    >
      Exit
    </ButtonExit>
  )
}

export default ButtonPlayerExit

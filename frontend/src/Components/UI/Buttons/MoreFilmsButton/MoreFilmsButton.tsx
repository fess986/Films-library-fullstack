import { useSelector } from 'react-redux'

import { ButtonMoreFilms } from './styles'
import { useAppDispatch } from '../../../../store'
import { getFilmsShownCount } from '../../../../store/app/appSelectors'
import { setFilmsShownCount } from '../../../../store/app/appSlice'

const MoreFilmsButton: React.FC = () => {
  const dispatch = useAppDispatch()
  const filmsShownCount = useSelector(getFilmsShownCount)

  return (
    <ButtonMoreFilms
      onClick={() => dispatch(setFilmsShownCount(filmsShownCount + 1))}
    >
      Show more
    </ButtonMoreFilms>
  )
}

export default MoreFilmsButton

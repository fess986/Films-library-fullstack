import { useRef } from 'react'
import { useSelector } from 'react-redux'

import { ButtonMoreFilms } from './styles'
import { useAppDispatch } from '../../../../store'
import { getFilmsShownCount } from '../../../../store/app/appSelectors'
import { setFilmsShownCount } from '../../../../store/app/appSlice'

const MoreFilmsButton: React.FC = () => {
  const dispatch = useAppDispatch()
  const filmsShownCount = useSelector(getFilmsShownCount)
  const buttonRef = useRef<HTMLButtonElement | null>(null)


  const handleClick = () => {
    dispatch(setFilmsShownCount(filmsShownCount + 1))
    // Прокручиваем к кнопке
    requestAnimationFrame(() => {
      buttonRef.current?.scrollIntoView({ behavior: 'auto', block: 'center' })
    })
  }

  return (
    <ButtonMoreFilms
      ref={buttonRef}
      onClick={handleClick}
    >
      Show more
    </ButtonMoreFilms>
  )
}

export default MoreFilmsButton

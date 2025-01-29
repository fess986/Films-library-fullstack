import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// import { AppRoutes } from '../../../../const/const'
// import { useAppDispatch } from '../../../../store'
// import { resetFilmsShownCount } from '../../../../store/app/appSlice'
// import { getActiveFilm } from '../../../../store/films/filmsSelector'
import { StyledButton } from '../styles'

const ButtonUserPage: React.FC = () => {
  // const navigate = useNavigate()
  // const dispatch = useAppDispatch()
  // const currentFilm = useSelector(getActiveFilm)

  const handleClick = () => {
    console.log('click')
    // currentFilm &&
    //   navigate(
    //     `${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(':id/*', String(currentFilm.id))}`
    //   )
    // dispatch(resetFilmsShownCount())
  }

  return (
    <StyledButton onClick={handleClick}>
      <svg viewBox="0 0 25 25" width={25} height={25}>
        <use xlinkHref="#user" />
      </svg>
      <span>User Page</span>
    </StyledButton>
  )
}

export default ButtonUserPage

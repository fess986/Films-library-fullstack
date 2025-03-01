import { useSelector } from 'react-redux'

import { DivFilmInfo, DivFilmCard } from './styles'
import { AuthStatus } from '../../../const/const'
import { getIsFilmsLoaded } from '../../../store/app/appSelectors'
import { getIsAuth } from '../../../store/user/userSelectors'
import { FilmProps } from '../../../types/types'
import FilmCardPoster from '../../UI/FilmCardPoster/FilmCardPoster'
import FilmButtons from '../FilmButtons/FilmButtons'
import FilmCardDescription from '../FilmCardDescription/FilmCardDescription'

type FilmInfoProps = {
  film: FilmProps | null
}

const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded)
  const isAuth = useSelector(getIsAuth)
  const showUserPage = isAuth === AuthStatus.AUTH ? true : false
  // console.log(showUserPage)

  if (!isFilmsLoaded || !film) {
    return <div>Loading...</div>
  }

  return (
    <DivFilmCard>
      <FilmCardPoster img={film.posterImage} title={film.name} />
      <DivFilmInfo>
        <FilmCardDescription film={film} />
        <FilmButtons details id={film.id} userPage={showUserPage} />
      </DivFilmInfo>
    </DivFilmCard>
  )
}

export default FilmInfo

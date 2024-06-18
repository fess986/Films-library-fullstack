import { AppRoutes } from "../../../const/const"
import { LinkFilmMenuItem, LiFilmMenuItem } from "./styles"

type FilmMenuItemProps = {
  itemName: string,
  isActive: boolean,
}

const FilmMenuItem: React.FC<FilmMenuItemProps> = ({ itemName, isActive }) => {
  return (
    <LiFilmMenuItem>
      <LinkFilmMenuItem to={AppRoutes.ROOT} $active={isActive}>{itemName}</LinkFilmMenuItem>
    </LiFilmMenuItem>
  )
}

export default FilmMenuItem;
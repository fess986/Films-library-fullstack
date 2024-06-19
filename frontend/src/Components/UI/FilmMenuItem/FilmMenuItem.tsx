import { AppRoutes } from "../../../const/const"
import { LinkFilmMenuItem, LiFilmMenuItem } from "./styles"

type FilmMenuItemProps = {
  itemName: string,
  isActive: boolean,
  onclick: () => void
}

const FilmMenuItem: React.FC<FilmMenuItemProps> = ({ itemName, isActive, onclick }) => {
  return (
    <LiFilmMenuItem>
      <LinkFilmMenuItem to={itemName.toLowerCase()} $active={isActive} onClick={onclick}>{itemName}</LinkFilmMenuItem>
    </LiFilmMenuItem>
  )
}

export default FilmMenuItem;
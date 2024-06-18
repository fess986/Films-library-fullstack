import { FilmMenuItemProps } from "../../../const/const";
import FilmMenuItem from "../../UI/FilmMenuItem/FilmMenuItem";
import { UlFilmMenu } from "./styles";

type FilmMenuProps = {
  items: readonly FilmMenuItemProps[],
  activeItem: FilmMenuItemProps,
}

const FilmMenu: React.FC<FilmMenuProps> = ( {items, activeItem} ) => {

  return (
    <UlFilmMenu>
      {items.map((item) => <FilmMenuItem key={item} itemName={item} isActive={item === activeItem}/>)}
    </UlFilmMenu>
  )
}

export default FilmMenu;
import { useState } from "react";
import { useParams } from "react-router-dom";

import { UlFilmMenu } from "./styles";
import { FilmMenuItemProps } from "../../../const/const";
import FilmMenuItem from "../../UI/FilmMenuItem/FilmMenuItem";

type FilmMenuProps = {
  items: readonly FilmMenuItemProps[],
}

const FilmMenu: React.FC<FilmMenuProps> = ( {items} ) => {
  const params = useParams();
  // console.log(params)

  let initState: string = items[0];

  // для того чтобы правильно отображался активный пункт меню при перезагрузке страницы и наборе адреса в браузере
  switch (params['*']) {
    case items[0].toLowerCase():
      initState = items[0].toLowerCase();
      break;
    case items[1].toLowerCase():
      initState = items[1].toLowerCase();
      break;
    case items[2].toLowerCase():
      initState = items[2].toLowerCase();
      break;
  }

  const [activeItem, setActiveItem] = useState(initState);

  return (
    <UlFilmMenu>
      {items.map((item) => <FilmMenuItem key={item} itemName={item} isActive={item.toLowerCase() === activeItem.toLowerCase()} onclick={() => setActiveItem(item)}/>)}
    </UlFilmMenu>
  )
}

export default FilmMenu;
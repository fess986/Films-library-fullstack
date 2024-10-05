import { LiGenresListItem, LinkGenresListItem } from "./styles";
import { useAppDispatch } from "../../../store";
import { setActiveGenre } from "../../../store/app/appSlice";

type GenreItemProps = {
  genre: string,
  active?: boolean
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, active }) => {
  // const dispatch = useDispatch<AppDispatch>()  // это использование обычного диспатча, но в данном случае он не нужен так как у нас есть уже типизированный вариант - useAppDispatch
  const dispatch = useAppDispatch()
  const setActive = () => {
    console.log(genre)
    dispatch(setActiveGenre(genre))
  }

  return (
    <LiGenresListItem>
      <LinkGenresListItem to={'#'} onClick={setActive} $active={active}>{genre}</LinkGenresListItem>
    </LiGenresListItem>
  )
}

export default GenreItem
import { LiGenresListItem, LinkGenresListItem } from "./styles";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { setActiveGenre } from "../../../store/app/appSlice";

type GenreItemProps = {
  genre: string,
  active?: boolean
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, active }) => {
  const dispatch = useDispatch<AppDispatch>()
  const setActive = () => {
    dispatch(setActiveGenre(genre))
  }

  return (
    <LiGenresListItem>
      <LinkGenresListItem to={'#'} onClick={setActive} $active={active}>{genre}</LinkGenresListItem>
    </LiGenresListItem>
  )
}

export default GenreItem
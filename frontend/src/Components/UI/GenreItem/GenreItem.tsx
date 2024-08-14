import { LiGenresListItem, LinkGenresListItem } from "./styles";

type GenreItemProps = {
  genre: string,
  active?: boolean
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, active }) => {
  return (
    <LiGenresListItem>
      <LinkGenresListItem to={'#'} $active={active}>{genre}</LinkGenresListItem>
    </LiGenresListItem>
  )
}

export default GenreItem
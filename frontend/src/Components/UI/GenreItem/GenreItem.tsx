// import { Link } from "react-router-dom"

type GenreItemProps = {
  genre: string,
  active?: boolean
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, active }) => {
  return (
    <li className="genres-list__item">
      <a href="#" className={`genres-list__link ${active ? 'genres-list__link--active' : ''}`}>{genre}</a>
    </li>
  )
}

export default GenreItem
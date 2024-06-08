type FilmCardPosterProps = {
  title: string,
  img: string,
}

const FilmCardPoster: React.FC<FilmCardPosterProps> = ({img, title}) => {
  return (
    <div className="film-card__poster">
          <img className="film-card__image" src={ img } alt={ title } />
        </div>
  )
}

export default FilmCardPoster;
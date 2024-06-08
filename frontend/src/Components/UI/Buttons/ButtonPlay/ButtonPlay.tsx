const ButtonPlay = (): JSX.Element => {
  return (
    <button className="film-card__button button button--play" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  )
}

export default ButtonPlay;
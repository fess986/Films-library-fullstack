const ButtonAdd = (): JSX.Element => {
  return (
    <button className="film-card__button button button--list" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  )
}

export default ButtonAdd;
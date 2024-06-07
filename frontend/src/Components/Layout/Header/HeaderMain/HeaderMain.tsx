const HeaderMain: React.FC = () => {
  return (
    <section className="main-page__hero-image hero">
      <div className="hero__container">
        <picture>
          <source srcSet="/images/hero-poster2.webp" type="image/webp" />
          <img className="hero__image" src="/images/hero-poster2.jpg" alt="The Grand Budapest Hotel" />
        </picture>
      </div>
      <h1 className="visually-hidden">Films Library</h1>

      <header className="hero__header main-page-header">
        <a className="main-page-header__logo logo">
          <img className="logo__image" src="/images/logo.jpeg" alt="Films Library" />
        </a>
        <ul className="main-page-header__user-block user-block">
          <li className="user-block__item">
            <div className="user-block__avatar user-avatar">
              <img className="user-avatar__image" src="/images/avatar.png" alt="User avatar" />
            </div>
          </li>
          <li className="user-block__item user-block-text">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <div className="main-page__film-card film-card film-card__container">
        <div className="film-card__poster">
          <img className="film-card__image" src="/images/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" />
        </div>
        <div className="film-card__info">
          <div className="film-card__buttons">
            <button className="film-card__button button button--play" type="button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="film-card__button button button--list" type="button">
              <svg viewBox="0 0 19 20" width={19} height={20}>
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
            </button>
          </div>
          <div className="film-card__description">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">Drama</span>
              <span className="film-card__year">2014</span>
            </p>
            <p className="film-card__meta">
              <span className="film-card__rating">Film rating: 8.1</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeaderMain;
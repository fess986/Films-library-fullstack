const MyList: React.FC = () => {
  return (
    <div className="main-page__content main-page-content">
      <section className="main-page-content__catalog catalog">
        <h2 className="catalog__title visually-hidden">My list</h2>
        <h2 className="catalog__title">My list</h2>
        <div className="catalog__films-list films-list">
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/macbeth.jpg" alt="Macbeth" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Macbeth</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/aviator.jpg" alt="Aviator" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Aviator</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">We need to talk about Kevin</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">What We Do in the Shadows</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/revenant.jpg" alt="Revenant" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Revenant</a>
            </h3>
          </article>
          <article className="films-list__films-card small-film-card">
            <div className="small-film-card__image">
              <img className="small-film-card__img" src="/images/johnny-english.jpg" alt="Johnny English" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">Johnny English</a>
            </h3>
          </article>
        </div>
        <div className="catalog__more-films-button more-films-button">
          <button className="more-films__button" type="button">Show more</button>
        </div>
      </section>
    </div>

  )
};

export default MyList;
const HeaderSignIn: React.FC = ( ) => {
  return (
    <section className="add-review__hero-image hero">
      <h1 className="visually-hidden">Films Library</h1>
      <header className="add-review-page-header hero__header">
        <div className="main-page-header__logo">
          <a className="logo">
            <img className="logo__image" src="/images/logo.jpeg" alt="Films Library" />
          </a>
          <nav className="main-page-header__breadcrumbs breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item breadcrumbs__item--dark">
                <a href="/" className="breadcrumbs__link breadcrumbs__link--dark">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link breadcrumbs__link--dark">Add review</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="main-page-header__user-block user-block">
          <li className="user-block__item">
            <div className="user-block__avatar user-avatar">
              <img className="user-avatar__image" src="/images/avatar.png" alt="User avatar" />
            </div>
          </li>
          <li className="user-block__item user-block-text user-block-text--dark">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
    </section>
  )
};

export default HeaderSignIn;
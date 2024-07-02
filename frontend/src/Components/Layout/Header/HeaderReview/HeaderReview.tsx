import { FilmProps } from "../../../../types/types";
import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { PageList } from "../../../../const/const";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";


type HeaderMainProps = {
  isAuth?: boolean,
  currentFilm: FilmProps,
}

const HeaderReview: React.FC<HeaderMainProps> = ({ isAuth, currentFilm }) => {
  console.log(currentFilm, isAuth)
  return (
    <section className="add-review__hero-image hero">
      
      <HeroPicture $page={PageList.ADD_REVIEW}/>

      <H1Hidden>Add review</H1Hidden>

      <Header isAuth={isAuth} breadcrumbs $page={PageList.ADD_REVIEW}/>

      {/* <header className="add-review-page-header hero__header">
        <div className="main-page-header__logo">
          <a className="logo">
            <img className="logo__image" src="/images/logo.jpeg" alt="Films Library" />
          </a>
          <nav className="main-page-header__breadcrumbs breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
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
          <li className="user-block__item user-block-text">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header> */}

      <div className="add-review__film-card film-card">
        <div className="movie-page__film-card-info film-card__info">
          <div className="film-card__description">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeaderReview;
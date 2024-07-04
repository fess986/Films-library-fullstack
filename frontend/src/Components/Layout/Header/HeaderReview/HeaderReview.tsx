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
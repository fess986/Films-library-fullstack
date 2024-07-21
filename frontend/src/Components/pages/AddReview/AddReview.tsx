import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";

type Props = {
  film: FilmProps
}

const AddReview: React.FC<Props> = ({film}) => {
  console.log(film);
  
  return (
    <section className="add-review__additional-film-info additional-film-info additional-film-info--add-review">
      <FilmCardPoster img={film.posterImage} title={film.name} center={true}/>

      <form action="#" className="additional-film-info__add-review-form add-review-form">

        <RatingStars currentRating={7}/>

        <div className="add-review-form___review-text review-text">
          <textarea className="review-text__input" name="review-text" id="review-text" placeholder="Review text" defaultValue={""} />
          <div className="review-text__btn-container">
            <button className="review-text__button" type="submit">Post</button>
          </div>
        </div>
      </form>
    </section>
  )
};

export default AddReview;
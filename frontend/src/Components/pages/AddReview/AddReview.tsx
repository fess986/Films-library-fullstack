import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";

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

        <ReviewText text={""} />

      </form>
    </section>
  )
};

export default AddReview;
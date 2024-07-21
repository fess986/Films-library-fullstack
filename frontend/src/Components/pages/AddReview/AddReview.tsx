import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";

type Props = {
  film: FilmProps
}

const AddReview: React.FC<Props> = ({film}) => {
  console.log(film);
  
  return (
    <section className="add-review__additional-film-info additional-film-info additional-film-info--add-review">
      <FilmCardPoster img={film.posterImage} title={film.name} center={true}/>

      <form action="#" className="additional-film-info__add-review-form add-review-form">
        <div className="add-review-form__rating-stars rating-stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
          <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} defaultChecked />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
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
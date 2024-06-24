import { Review } from "../../../../types/types";

type FilmReviewsProps = {
  reviews: Review[]
}

const FilmReviews: React.FC<FilmReviewsProps> = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="additional-film-info__movie-page-reviews movie-page-reviews">
      <div className="movie-page-reviews__col">
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              Discerning travellers and Wes Anderson fans will luxuriate
              in the glorious Mittel-European kitsch of one of the
              director's funniest and most exquisitely designed films in
              years.
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Kate Muir</cite>
              <time className="movie-page-review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,9</div>
        </div>
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              Anderson's films are too precious for some, but for those of
              us willing to lose ourselves in them, they're a delight.
              "The Grand Budapest Hotel" is no different, except that he
              has added a hint of gravitas to the mix, improving the
              recipe.
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Bill Goodykoontz</cite>
              <time className="movie-page-review__date" dateTime="2016-12-24">November 18, 2015</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,9</div>
        </div>
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              Discerning travellers and Wes Anderson fans will luxuriate
              in the glorious Mittel-European kitsch of one of the
              director's funniest and most exquisitely designed films in
              years.
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Kate Muir</cite>
              <time className="movie-page-review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,9</div>
        </div>
      </div>
      <div className="movie-page-reviews__col">
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              didn't find it amusing, and while I can appreciate the
              creativity, it's an hour and 40 minutes I wish I could take
              back
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Amanda Greever</cite>
              <time className="movie-page-review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,9</div>
        </div>
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              The mannered, madcap proceedings are often delightful,
              occasionally silly, and here and there, gruesome and/or
              heartbreaking.
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Matthew Lickona</cite>
              <time className="movie-page-review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,0</div>
        </div>
        <div className="movie-page-reviews__movie-page-review movie-page-review">
          <blockquote className="movie-page-review__quote">
            <p className="movie-page-review__text">
              Discerning travellers and Wes Anderson fans will luxuriate
              in the glorious Mittel-European kitsch of one of the
              director's funniest and most exquisitely designed films in
              years.
            </p>
            <footer className="movie-page-review__details">
              <cite className="movie-page-review__author">Kate Muir</cite>
              <time className="movie-page-review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>
          <div className="movie-page-review__rating">8,9</div>
        </div>
      </div>
    </div>
  )
}

export default FilmReviews;
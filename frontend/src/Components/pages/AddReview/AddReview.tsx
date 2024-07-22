import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";
import { FormAddReview, SectionAddReview } from "./styles";

type Props = {
  film: FilmProps
}

const AddReview: React.FC<Props> = ({film}) => {
  return (
    <SectionAddReview>
      <FilmCardPoster img={film.posterImage} title={film.name} center={true}/>
      <FormAddReview action="#" >
        <RatingStars currentRating={7}/>
        <ReviewText text={""} />
      </FormAddReview>
    </SectionAddReview>
  )
};

export default AddReview;
import { FilmProps } from "../../../../types/types";
import { SpanRatingValue, SpanRatingTextValue, SpanRatingCount, DivOverviewParagraph, PDescriptionText, SpanDirectorTitle, SpanDirectorName, SpanStarringTitle, SpanStarringNames, DivOverviewContainer } from "./style";

type FilmOverviewProps = {
  film: FilmProps
}

const FilmOverview: React.FC<FilmOverviewProps> = ({ film }) => {
  const { rating } = film
  let textRating;

  if (rating < 0 || rating > 10) {
    textRating = 'Invalid rating';
  } else if (rating <= 3) {
    textRating = 'Bad';
  } else if (rating <= 5) {
    textRating = 'Normal';
  } else if (rating <= 8) {
    textRating = 'Good';
  } else if (rating < 10) {
    textRating = 'Very Good';
  } else if (rating === 10) {
    textRating = 'Awesome!';
  } else {
    textRating = 'Invalid rating';
  }

  return (
    <DivOverviewContainer>
      <DivOverviewParagraph>
        <SpanRatingValue>{rating}</SpanRatingValue>
        <SpanRatingTextValue>{textRating}</SpanRatingTextValue>
        <SpanRatingCount>{film.scoresCount}</SpanRatingCount>
      </DivOverviewParagraph>
      <DivOverviewParagraph>
        <PDescriptionText>{film.description}
        </PDescriptionText>
      </DivOverviewParagraph>
      <DivOverviewParagraph>
        <SpanDirectorTitle>Director:</SpanDirectorTitle>
        <SpanDirectorName>{film.director}</SpanDirectorName>
      </DivOverviewParagraph>
      <DivOverviewParagraph>
        <SpanStarringTitle>Starring:</SpanStarringTitle>
        <SpanStarringNames>{film.starring.join(', ')}</SpanStarringNames>
      </DivOverviewParagraph>
    </DivOverviewContainer>
  )
}

export default FilmOverview;
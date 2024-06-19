import { FilmProps } from "../../../../types/types";
import { SpanRatingValue, SpanRatingTextValue, SpanRatingCount, DivOverviewParagraph, PDescriptionText, SpanDirectorTitle, SpanDirectorName, SpanStarringTitle, SpanStarringNames, DivOverviewContainer } from "./style";

type FilmOverviewProps = {
  film: FilmProps
}

const FilmOverview: React.FC<FilmOverviewProps> = ({ film }) => {
  return (
    <DivOverviewContainer>
      <DivOverviewParagraph>
        <SpanRatingValue>{film.rating}</SpanRatingValue>
        <SpanRatingTextValue>very good</SpanRatingTextValue>
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
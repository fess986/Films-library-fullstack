import { FilmProps } from "../../../../types/types";
import { DivDetailsContainer, DivItem, SpanDetailsItemTitle, SpanDetailsItemValue } from "./styles";
import { getDuration } from "../../../../utils/utils";

type FilmDetailsProps = {
  film: FilmProps | null
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (

    <DivDetailsContainer>

      {!film && <div>Loading...</div>}
      
      {film &&
        <>
          <DivItem>
            <SpanDetailsItemTitle>Director:</SpanDetailsItemTitle>
            <SpanDetailsItemValue>{film.director}</SpanDetailsItemValue>
          </DivItem>

          <DivItem>
            <SpanDetailsItemTitle>Starring:</SpanDetailsItemTitle>
            <SpanDetailsItemValue>{film.starring.join(", ")}</SpanDetailsItemValue>
          </DivItem>

          <DivItem>
            <SpanDetailsItemTitle>Run Time:</SpanDetailsItemTitle>
            <SpanDetailsItemValue>{getDuration(film.runTime)}</SpanDetailsItemValue>
          </DivItem>

          <DivItem>
            <SpanDetailsItemTitle>Genre:</SpanDetailsItemTitle>
            <SpanDetailsItemValue>{film.genre.join(", ")}</SpanDetailsItemValue>
          </DivItem>

          <DivItem>
            <SpanDetailsItemTitle>Released:</SpanDetailsItemTitle>
            <SpanDetailsItemValue>{film.released}</SpanDetailsItemValue>
          </DivItem>
        </>

      }
    </DivDetailsContainer>
  )
}

export default FilmDetails;
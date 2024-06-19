import { FilmProps } from "../../../../types/types";

type FilmDetailsProps = {
  film: FilmProps
}

const FilmDetails: React.FC<FilmDetailsProps> = ({film}) => {
  return (
    <>
      film details
    </>
  )
}

export default FilmDetails;
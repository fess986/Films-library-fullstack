import { FilmProps } from "../../../../types/types";

type FilmOverviewProps = {
  film: FilmProps
}

const FilmOverview: React.FC<FilmOverviewProps> = ({film}) => {
  return (
    <>
      FilmOverview
    </>
  )
}

export default FilmOverview;
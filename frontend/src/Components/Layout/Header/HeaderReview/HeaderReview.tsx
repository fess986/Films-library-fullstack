import { FilmProps } from "../../../../types/types";
import HeroPicture from "../../../UI/HeroPicture/HeroPicture";
import { PageList } from "../../../../const/const";
import { H1Hidden } from "../../../styled/Components";
import Header from "../../../blocks/Header/Header";
import { H2FilmTitle, DivFilmInfo, DivFilmCard, SectionHero } from "./styles";

export type HeaderReviewProps = {
  isAuth?: boolean,
  currentFilm: FilmProps,
}

const HeaderReview: React.FC<HeaderReviewProps> = ({ isAuth, currentFilm }) => {
  return (
    <SectionHero>
      <HeroPicture $page={PageList.ADD_REVIEW} />
      <H1Hidden>Add review</H1Hidden>
      <Header isAuth={isAuth} breadcrumbs $page={PageList.ADD_REVIEW} isDark={false} />

      <DivFilmCard>
        <DivFilmInfo>
          <H2FilmTitle>{currentFilm.name}</H2FilmTitle>
        </DivFilmInfo>
      </DivFilmCard>
    </SectionHero>
  )
};

export default HeaderReview;
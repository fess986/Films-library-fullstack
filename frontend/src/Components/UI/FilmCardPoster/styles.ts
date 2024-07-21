import styled from "styled-components";
import { Img, Div } from "../../styled/Components";

type DivFilmCardPosterContainerProps = {
  isCentered?: boolean
}

export const DivFilmCardPosterContainer = styled(Div)<DivFilmCardPosterContainerProps>`
  margin-right: 40px;
  min-width: 250px;

  ${props => props.isCentered && `margin: auto`}
`

export const ImgFilmCardPoster = styled(Img)`
  width: 250px;
  max-width: 100%;
  height: auto
`
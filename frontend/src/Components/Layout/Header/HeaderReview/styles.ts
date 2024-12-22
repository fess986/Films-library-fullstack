import styled from 'styled-components'

import { H2, Div, Section } from '../../../styled/Components'
import {
  textColorMain,
  fontH2,
  blackTextStroke,
  zIndexMiddle,
} from '../../../styled/Mixins/mixins'

export const H2FilmTitle = styled(H2)`
  max-width: 750px;
  max-height: 85px;
  overflow: hidden;

  ${textColorMain}
  ${fontH2}
  ${blackTextStroke}
`

export const DivFilmInfo = styled(Div)`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DivFilmCard = styled(Div)`
  max-width: 1300px;
  display: flex;

  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`

export const SectionHero = styled(Section)`
  position: relative;

  max-width: 1440px;
  min-height: 375px;
  ${zIndexMiddle}
`

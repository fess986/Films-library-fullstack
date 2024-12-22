import styled from 'styled-components'

import { Div, Section, H2 } from '../../styled/Components'
import { zIndexMiddle, fontH2 } from '../../styled/Mixins/mixins'

export const DivAdditionalFilmInfo = styled(Div)`
  padding-top: 100px;
`

export const DivAdditionalFilmContainer = styled(Div)`
  position: relative;
  display: flex;

  max-width: 1300px;
  padding: 25px 75px;
  padding-bottom: 60px;
  transform: translateY(-170px);

  ${zIndexMiddle}

  &--add-review {
    flex-direction: column;
  }
`

export const SectionMoreFilms = styled(Section)`
  width: 1200px;
  transform: translateY(-170px);
  padding: 20px 75px;
  border-top: 2px solid #000;
`
export const H2MoreFilmsTitle = styled(H2)`
  ${fontH2}

  text-decoration: underline dotted black;
  text-underline-offset: 5px;
`

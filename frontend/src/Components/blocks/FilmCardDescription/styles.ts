import styled from 'styled-components'

import { Div, PMediumMain, Span, H2Main } from '../../styled/Components'

export const H2FilmName = styled(H2Main)`
  max-width: 750px;
  max-height: 85px;
  overflow: hidden;
`

export const SpanGenre = styled(Span)`
  &::after {
    content: '·';
    margin-left: 4px;
    margin-right: 4px;
  }
`

export const SpanYear = styled(Span)``

export const SpanRating = styled(Span)``

export const SpanLocalization = styled(Span)``

export const PMeta = styled(PMediumMain)`
  font-weight: 700;
  margin-bottom: 25px;
`

export const DivDescription = styled(Div)``

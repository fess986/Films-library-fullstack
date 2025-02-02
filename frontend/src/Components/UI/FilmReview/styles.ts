import styled from 'styled-components'

import { P, Footer, Blockquote, Cite, Time, Div } from '../../styled/Components'
import {
  fontMedium,
  textColorAdditional,
  fontBig,
} from '../../styled/Mixins/mixins'

export const ReviewText = styled(P)`
  min-height: 50px;
  ${fontMedium}
  ${textColorAdditional}

	&::first-letter {
    initial-letter: 2;
    text-transform: uppercase;
  }
`

export const ReviewFooter = styled(Footer)`
  color: inherit;
`

export const ReviewQuote = styled(Blockquote)`
  margin: 0;
`

export const ReviewAuthor = styled(Cite)`
  display: block;
  ${fontMedium}
  ${textColorAdditional}
  font-weight: 700;
`

export const ReviewDate = styled(Time)`
  ${fontMedium}
  ${textColorAdditional}
  font-weight: 700;
  opacity: 0.6;
`
export const ReviewContainer = styled(Div)`
  position: relative;

  padding-bottom: 20px;
  padding-right: 75px;
  margin-bottom: 10px;

  border-bottom: 2px solid ${({ theme }) => theme.textColorAdditional};
`
export const ReviewRating = styled(Div)`
  position: absolute;
  right: 0;
  top: 0px;

  ${fontBig}
  ${textColorAdditional}

	padding: 8px 12px;

  background: rgba(0, 0, 0, 0.24);
  border-radius: 8px;
`

export const ButtonContainer = styled(Div)`
  position: absolute;
  right: 0;
  top: 55px;
`

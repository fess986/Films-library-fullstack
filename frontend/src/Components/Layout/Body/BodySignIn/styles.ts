import styled from 'styled-components'

import { Div } from '../../../styled/Components'

import imgFont from '/images/content-fone.png'

import { mainFontFamily, fontMedium } from '../../../styled/Mixins/mixins'

export const DivMainContainer = styled(Div)`
  max-width: 1200px;
  width: 100%; // чтобы контейнер занимал всю доступную ширину, если контент меньше 1200px
  margin: 0 auto;
  background-color: gray;
  // background: gray url("/images/content-fone.png") -330px 330px repeat;
  background: gray url(${imgFont}) -330px 330px repeat;
`

export const BodyMainStyled = styled(Div)`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  ${mainFontFamily}
  ${fontMedium}

	background: #ece8dd url('/images/fone.gif') left top repeat
`

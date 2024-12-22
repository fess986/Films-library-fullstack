import styled from 'styled-components'

import { Footer, Div } from '../../styled/Components'
import { fontMedium, textColorAdditional } from '../../styled/Mixins/mixins'

export const DivCopyright = styled(Div)`
  ${fontMedium}
  ${textColorAdditional}
`

export const FooterPage = styled(Footer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  max-width: 1400px;
`

export const FooterMain = styled(FooterPage)`
  margin-top: 100px;
  margin-bottom: 20px;
`

export const FooterSignIn = styled(FooterPage)`
  margin-bottom: 20px;
`

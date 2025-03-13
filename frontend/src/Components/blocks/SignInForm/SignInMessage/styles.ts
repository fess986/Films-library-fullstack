import styled from 'styled-components'

import { P } from '../../../styled/Components'
import { fontMedium } from '../../../styled/Mixins/mixins'

type SignInMessageProps = {
  $isError?: boolean
}

export const PSignInMessage = styled(P)<SignInMessageProps>`
  margin-bottom: 30px;
  text-align: start;
  ${fontMedium}
  ${({ theme, $isError }) =>
    $isError
      ? `
  color: ${theme.textColorError};
`
      : `
  color: ${theme.textColorAdditional};`}
`

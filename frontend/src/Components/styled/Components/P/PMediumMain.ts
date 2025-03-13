import styled from 'styled-components'

import { PMedium } from './PMedium'
import { blackTextStroke } from '../../Mixins/mixins'

export const PMediumMain = styled(PMedium)`
  color: ${(props) => props.theme.textColorMain};
  ${blackTextStroke}
`

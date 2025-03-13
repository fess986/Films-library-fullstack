import styled from 'styled-components'

import { Section } from '../../../styled/Components'
import { zIndexMiddle } from '../../../styled/Mixins/mixins'

export const SectionHeroImage = styled(Section)`
  position: relative;
  min-height: 675px;
  max-width: 1440px;

  ${zIndexMiddle}
`

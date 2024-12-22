import styled from 'styled-components'

import { H1Hidden, Section, Div } from '../../styled/Components'

export const H2Hidden = styled(H1Hidden)`
  font-size: ${(props) => props.theme.textSizeH2 || '32px'};
  line-height: ${(props) => props.theme.textLineHeightH2 || '45px'};
`

export const SectionCatalog = styled(Section)`
  width: 100%;
  width: 1200px;
  max-width: 1200px;

  padding: 20px 75px;
`

export const DivCatalogContent = styled(Div)`
  width: 1200px;
`

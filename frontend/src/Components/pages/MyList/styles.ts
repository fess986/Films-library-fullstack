import styled from 'styled-components'

import { H1Hidden, H2, Section, Div } from '../../styled/Components'
import { fontH2 } from '../../styled/Mixins/mixins'

export const H2Hidden = styled(H1Hidden)`
  font-size: ${(props) => props.theme.textSizeH2 || '32px'};
  line-height: ${(props) => props.theme.textLineHeightH2 || '45px'};
`

export const H2CatalogTitle = styled(H2)`
  text-decoration: underline;
  ${fontH2}
`
export const SectionCatalog = styled(Section)<{ $isMoved?: boolean }>`
  width: 100%;
  width: 1200px;
  max-width: 1200px;

  padding: 20px 75px;
  margin-top: ${(props) => props.$isMoved && '-200px'};
`
export const SectionCatalogContainer = styled(Section)`
  width: 1200px;
`
export const DivReviewsContainer = styled(Div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  max-width: 1200px;
`

export const DivReviewsCol = styled(Div)`
  width: calc((100% - 60px) / 2);
  margin-right: 60px;
  max-width: 570px;

  &:nth-last-child(1) {
    margin-right: 0;
  }
`

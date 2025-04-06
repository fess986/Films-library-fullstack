import styled from 'styled-components'

import { Div } from '../../styled/Components'
import { textColorMain, zIndexMiddle } from '../../styled/Mixins/mixins'

type DivControlsContainerProps = {
  $isShown: boolean
}

export const DivControlsContainer = styled(Div)<DivControlsContainerProps>`
  display: ${(props) => (props.$isShown ? 'block' : 'none')};

  position: absolute;

  ${zIndexMiddle}
  left: 0;
  right: 0;
  bottom: 0;

  padding: 25px;
`

export const DivConrolRow = styled(Div)`
  display: flex;

  flex-direction: row;

  align-items: center;
  margin-bottom: 15px;
`

export const DivControlsTime = styled(Div)`
  flex-shrink: 0;

  width: 60px;

  text-align: right;

  ${textColorMain}
  font-size: 14px;
`

export const DivControlsName = styled(Div)`
  ${textColorMain}
  font-size: 17px;
  line-height: 20px;
  font-weight: 700;

  margin: 0 30px;
`

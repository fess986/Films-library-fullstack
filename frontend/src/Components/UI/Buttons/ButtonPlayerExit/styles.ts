import styled from 'styled-components'

import { Button } from '../../../styled/Components'
import {
  zIndexMiddle,
  textColorMain,
  fontBig,
} from '../../../styled/Mixins/mixins'

export const ButtonExit = styled(Button).attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  top: 60px;
  right: 60px;

  display: block;
  ${zIndexMiddle}
  ${fontBig}
  ${textColorMain}

  background: 0 0;

  border: none;
  border-radius: 8px;

  padding: 10px 20px;
  width: 93px;

  cursor: pointer;

  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.1);
  }
`

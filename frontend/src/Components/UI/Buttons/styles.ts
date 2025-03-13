import styled from 'styled-components'

import { Button } from '../../styled/Components'
import { fontMedium, textColorMain } from '../../styled/Mixins/mixins'

export const StyledButton = styled(Button).attrs(() => ({
  type: 'button',
}))`
  display: flex;
  padding: 13px 30px;
  align-items: center;

  min-width: 128px;
  max-width: 300px;
  overflow: hidden;

  ${textColorMain}
  ${fontMedium}

	background: rgba(55, 54, 41, 0.65);

  border-radius: 8px;
  border: 0;
  text-decoration: none;
  cursor: pointer;

  will-change: transform;
  transition:
    0.2s background-color,
    0.2s transform,
    0.2s -webkit-transform;

  &:hover {
    background: rgba(0, 0, 0, 0.51);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  & svg {
    vertical-align: top;
    margin-right: 9px;
  }

  margin-right: 14px;

  &:last-child {
    margin-right: 0px;
  }
`

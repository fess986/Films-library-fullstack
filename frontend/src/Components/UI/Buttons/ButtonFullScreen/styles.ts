import styled from 'styled-components'

import { Button, Svg } from '../../../styled/Components'

export const ButtonFullScreenStyle = styled(Button).attrs(() => ({
  type: 'button',
}))`
  margin-left: auto;

  display: block;

  font-size: 0;
  background: 0 0;
  border: none;

  width: 27px;
  height: 27px;
  padding: 0;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const SvgIcon = styled(Svg)`
  fill: #fff9d9; // определяем начальный цвет иконки
  transition: fill 0.3s ease; // правный переход

  &:hover {
    fill: ${({ theme }) => theme.textColorMain};
  }
`

import styled from 'styled-components'

import { Div, Input } from '../../../styled/Components'
import { textColorAdditional, fontH2 } from '../../../styled/Mixins/mixins'

export const DivSignInFields = styled(Div)`
  margin-bottom: 30px;
`

export const DivSignInField = styled(Div)`
  margin-bottom: 3px;
  position: relative;
`

export const DivSignInInput = styled(Input)`
  position: relative;
  display: block;
  width: 100%;

  background: 0 0;
  border-radius: 8px;
  border: 1px solid transparent;
  outline: 0;

  ${textColorAdditional}
  ${fontH2}

	padding: 25px 20px;
  transition: border-color 0.5s;

  &:hover {
    border-color: ${({ theme }) => theme.textColorInputHover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.textColorInputHover};
  }
`

export const DivSignInInputEmail = styled(DivSignInInput).attrs(() => ({
  type: 'email',
  placeholder: 'Email address',
}))``

export const DivSignInInputPass = styled(DivSignInInput).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))``

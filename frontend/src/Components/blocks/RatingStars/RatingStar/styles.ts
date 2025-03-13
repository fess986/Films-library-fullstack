import styled from 'styled-components'

import { Input, Label } from '../../../styled/Components'

export const RatingInput = styled(Input)`
  display: none;

  &:checked ~ label::after {
    color: rgba(56, 44, 42, 0.7);
  }

  &:hover ~ label::after {
    color: rgba(56, 44, 42, 0.7);
  }
`

export const RatingLabel = styled(Label)`
  font-size: 0;
  line-height: 0;
  display: block;
  padding-right: 10px;
  cursor: pointer;

  &::after {
    content: '★';
    display: block;
    font-size: 32px;
    line-height: 36px;
    color: rgba(56, 44, 42, 0.36);
    transition: color 0.2s;
  }
`

import styled from 'styled-components'

import { Form, Section } from '../../styled/Components'
import { zIndexMiddle } from '../../styled/Mixins/mixins'

export const FormAddReview = styled(Form)`
  width: 520px;
  margin: auto;
  margin-top: 20px;
`

export const SectionAddReview = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 1300px;
  margin: auto;
  margin-top: 20px;

  ${zIndexMiddle}

  transform: translateY(-170px);
`

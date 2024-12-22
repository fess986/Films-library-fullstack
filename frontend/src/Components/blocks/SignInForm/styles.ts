import styled from 'styled-components'

import { Form, Div, Section } from '../../styled/Components'

import ImgScriptBottom from '/images/script-bottom-without-bg.png'

import { zIndexMiddle } from '../../styled/Mixins/mixins'

export const FormSignIn = styled(Form)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  padding: 60px 50px 50px 60px;
`

export const DivFormContainerTop = styled(Div)`
  min-height: 440px;
  background: url('/images/script-top-without-bg.png') left -40px no-repeat;
`

export const DivFormContainerBottom = styled(Div)`
  min-height: 440px;

  background-image: url(${ImgScriptBottom});
  background-position: 6px calc(100% + 32px);
  background-repeat: no-repeat;
`

export const SectionFormContainer = styled(Section)`
  position: relative;

  margin: auto;
  text-align: center;
  max-width: 540px;
  min-height: 400px;
  width: 100%;

  margin-top: -50px;
  transform: translateY(-130px);

  background: url('/images/script-scroll.jpg') 32px 246px repeat-y;

  ${zIndexMiddle}
`

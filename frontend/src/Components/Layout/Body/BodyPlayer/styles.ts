import styled from "styled-components";
import { Div } from "../../../styled/Components";
import { fontMedium, textColorMain } from "../../../styled/Mixins/mixins";


export const DivPlayer = styled(Div)`
	position: relative;
	min-width: 1000px;
	margin: 0;

  font-family: Arial, Helvetica, sans-serif;
  ${fontMedium}
  ${textColorMain}

  background-color: ${props => props.theme.textColorAdditional};
`

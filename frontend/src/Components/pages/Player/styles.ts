import styled from "styled-components";
import { Div } from "../../styled/Components";
import { zIndexFront } from "../../styled/Mixins/mixins";

export const DivPlayerContainer = styled(Div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

  ${zIndexFront}
  box-sizing: border-box;
`

import styled from "styled-components";

import { Div, Span } from "../../../styled/Components";
import { textColorAdditional, fontMedium } from "../../../styled/Mixins/mixins";

export const DivDetailsContainer = styled(Div)`
	max-width: 792px;
`;

export const DivItem = styled(Div)`
  margin-bottom: 30px;
`
export const SpanDetailsItemTitle = styled(Span)`
${fontMedium}
${textColorAdditional}
font-weight: 700;

margin-right: 10px;
`
export const SpanDetailsItemValue = styled(Span)`
${fontMedium}
${textColorAdditional}
`
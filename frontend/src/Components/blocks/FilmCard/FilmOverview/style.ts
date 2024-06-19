import styled from "styled-components";
import { Span, Div, P } from "../../../styled/Components";
import { fontBig, fontMedium, textColorAdditional } from "../../../styled/Mixins/mixins";

export const DivOverviewContainer = styled(Div)`
margin-bottom: 10px;
`

export const SpanRatingValue = styled(Span)`
${fontBig}

padding: 8px 12px;
margin-right: 10px;

${textColorAdditional}
background: rgba(0, 0, 0, 0.24);
border-radius: 8px;
`

export const SpanRatingTextValue = styled(Span)`
${textColorAdditional}
${fontMedium}
font-weight: 700;

margin-right: 10px;
`

export const SpanRatingCount = styled(Span)`
${textColorAdditional}
${fontMedium}
`

export const DivOverviewParagraph = styled(Div)`
margin-bottom: 30px;
`

export const PDescriptionText = styled(P)`
${textColorAdditional}
${fontMedium}
`

export const SpanDirectorTitle = styled(Span)`
${textColorAdditional}
${fontMedium}
font-weight: 700;

margin-right: 10px;
`

export const SpanDirectorName = styled(Span)`
${textColorAdditional}
${fontMedium}
`
export const SpanStarringTitle = styled(Span)`
${textColorAdditional}
${fontMedium}
font-weight: 700;

margin-right: 10px;
`
export const SpanStarringNames = styled(Span)`
${textColorAdditional}
${fontMedium}
`






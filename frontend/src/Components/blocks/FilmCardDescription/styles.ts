import styled from "styled-components";
import { H2Main } from "../../styled/Components/Title/H2Main";
import { Span } from "../../styled/Components/Span/Span";
import { PMediumMain } from "../../styled/Components/P/PMediumMain";
import { Div } from "../../styled/Components/Div/Div";

export const H2FilmName = styled(H2Main)`
	max-width: 750px;
	max-height: 85px;
	overflow: hidden;
`;

export const SpanGenre = styled(Span)`
	&::after {
		content: "·";
		margin-left: 4px;
		margin-right: 4px;
	}
`;

export const SpanYear = styled(Span)``;

export const SpanRating = styled(Span)``;

export const PMeta = styled(PMediumMain)`
	font-weight: 700;
	margin-bottom: 25px;
`;

export const DivDescription = styled(Div)``;

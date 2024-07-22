import styled from "styled-components";
import { Div, Textarea } from "../../styled/Components";
import { fontSmall, textColorAdditional } from "../../styled/Mixins/mixins";

export const DivReviewTextContainer = styled(Div)`
	display: flex;
	justify-content: flex-end;
	padding: 10px 20px;
`;

export const TextareaReviewText = styled(Textarea)`
	display: block;
	width: 100%;
	height: 150px;
	min-height: 150px;
	padding: 25px;

	border: none;
	background: 0 0;

	resize: vertical;

	${fontSmall}
	${textColorAdditional}

	outline: none;
	border: 2px solid ${({ theme }) => theme.textColorAdditional};
	transition: border-color 0.5s;

	&:focus {
		border-color: ${({ theme }) => theme.textColorMain};
	}
`;

export const DivReviewText = styled(Div)`
	display: block;
	border-radius: 8px;
	background: ${({ theme }) => theme.bgColorAddReview};
`;

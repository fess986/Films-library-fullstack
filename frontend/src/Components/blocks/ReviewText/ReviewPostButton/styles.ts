import styled from "styled-components";
import { Button } from "../../../styled/Components";
import { fontSmall } from "../../../styled/Mixins/mixins";

export const ButtonReviewPost = styled(Button)`
	display: block;
	padding: 0;

	border: none;
	background: 0 0;

	${fontSmall}
	color: ${({ theme }) => theme.bgColorAddReviewPostButton};
	letter-spacing: 0;
	line-height: 27px;
	font-weight: 700;

	transition: opacity 0.5s;
	transition: 0.5s transform, 0.5s;

	cursor: pointer;

	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
	}
`;

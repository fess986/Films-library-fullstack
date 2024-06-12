import styled from "styled-components";
import { StyledLink } from "../../styled/Components/Link/Link";
import { H3 } from "../../styled/Components/Title/H3";
import { Img } from "../../styled/Components/Img/Img";
import { Div } from "../../styled/Components/Div/Div";
import { Article } from "../../styled/Components/Article.ts/Article";

import {
	zIndexMiddle,
	zIndexTop,
	zIndexFront,
	textColorMain,
	yellowTextStroke,
} from "../../styled/Mixins/mixins";

export const SmallFilmCardLink = styled(StyledLink)`
	color: inherit;
`;

export const SmallFilmCardTitle = styled(H3)`
	${zIndexMiddle}

	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	padding: 0 10px;
	@include font-small;
	${textColorMain}

	&:hover {
		${zIndexTop}
		${yellowTextStroke}
	}
`;

export const SmallFilmCardImg = styled(Img)`
	width: 250px;
	height: auto;
	max-height: 160px;
	object-fit: cover;
`;

export const SmallFilmCardContainer = styled(Div)`
	display: block;
	position: relative;
	${zIndexFront}

	&::after {
		content: "";
		position: absolute;
		${zIndexFront}
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 0.63) 97%
		);
	}
`;

export const SmallFilmCardArticle = styled(Article)`
	margin-right: 10px;
	margin-bottom: 10px;

	position: relative;
	width: calc((100% - 30px) / 4);

	border-radius: 6px;
	overflow: hidden;
	cursor: pointer;

	will-change: transform;
	transition: 0.2s transform, 0.2s -webkit-transform;

	&:hover {
		${zIndexTop}
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	&:nth-child(4n) {
		margin-right: 0;
	}
`;
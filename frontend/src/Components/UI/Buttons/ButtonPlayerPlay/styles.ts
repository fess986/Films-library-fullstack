import styled from "styled-components";
import { Button, Svg } from "../../../styled/Components";

export const ButtonPlayer = styled(Button).attrs(() => ({
	type: "button",
}))`
	display: block;

	background: 0 0;
	border: none;
	width: 26px;
	height: 26px;

	font-size: 0;

	padding: 0;

	transition: 0.5s transform ease;

	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export const SvgIcon = styled(Svg)`
	fill: #fff9d9; // определяем начальный цвет иконки
	transition: fill 0.3s ease; // правный переход

	&:hover {
		fill: $text-color-main; // изменение цвета
	}
`;

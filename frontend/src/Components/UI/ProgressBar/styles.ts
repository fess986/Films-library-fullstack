import styled from "styled-components";
import { Div, Progress } from "../../styled/Components";

export const DivPorogressContainer = styled(Div)`
	margin-right: 20px;

	position: relative;
	flex-grow: 1; // говорим растянуться до максимальной ширины
`

export const ProgressLine = styled(Progress)` 
	display: block;
	width: 100%; // растягиваем на всю ширину

	background: rgba(255, 251, 231, 0.35);

	border-radius: 1px;
	border: none;

	cursor: pointer;

	height: 10px; // высота полосы прогресса
`

export const DivProgressToggler = styled(Div)`
	display: block;
	position: absolute;

	left: 0;
	top: 50%;

	width: 27px;
	height: 27px;
	border-radius: 50%;
	background: #d9cd8d;

	font-size: 0; // для того чтобы скрыть надпись "Toggler"

	transform: translate(-50%, -50%);

	cursor: pointer;
`

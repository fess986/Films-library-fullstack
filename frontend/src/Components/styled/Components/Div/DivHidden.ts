import styled from "styled-components";
import { Div } from "./Div";

export const DivHidden = styled(Div)`
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		white-space: nowrap;

		/* убирает пробелы, не дает переносить текст на другие строки */
		clip-path: inset(100%);
		/* определяет область отображения текста по шаблону. совместимость средняя */
		clip: rect(0 0 0 0);
		/* определяет область отображения текста по прямоугольнику. совместимость высокая */
		overflow: hidden;
		/* определяет что делать с элементами, которые не вмещаются в блок: показать/скрыть/скролл. можно применять к блокам, флексам и гридам */
`;

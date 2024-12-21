import styled from "styled-components";

import { Div } from "../../styled/Components";
import { zIndexMiddle } from "../../styled/Mixins/mixins";

export const DivFilmInfo = styled(Div)`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const DivFilmCard = styled(Div)`
	display: flex;
	max-width: 1300px;

	position: relative;
	margin: 0 auto;
	padding: 25px 75px;

	${zIndexMiddle};
`;

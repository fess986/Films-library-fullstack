import styled from "styled-components";
import { Div } from "../../../styled/Components";

export const DivReviewsCol = styled(Div)`
	width: calc((100% - 60px) / 2);
	margin-right: 60px;
	max-width: 365px;

	&:nth-last-child(1) {
		margin-right: 0;
	}
`;

export const DivReviewsContainer = styled(Div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  max-width: 792px;
`;



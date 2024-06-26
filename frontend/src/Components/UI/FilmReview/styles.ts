import styled from "styled-components";
import { P, Footer, Blockquote, Cite, Time, Div } from "../../styled/Components";
import { fontMedium, textColorAdditional } from "../../styled/Mixins/mixins";

export const ReviewText = styled(P)`
	${fontMedium}
	${textColorAdditional}
`;

export const ReviewFooter = styled(Footer)`
	color: inherit;
`;

export const ReviewQuote = styled(Blockquote)`
	margin: 0;
`;

export const ReviewAuthor = styled(Cite)`
	display: block;
	${fontMedium}
	${textColorAdditional}
  font-weight: 700;
`;

export const ReviewDate = styled(Time)`
	${fontMedium}
	${textColorAdditional}
  font-weight: 700;
  opacity: 0.6;
`
export const ReviewContainer = styled(Div)`
  position: relative;

	padding-bottom: 20px;
	padding-right: 75px;
	margin-bottom: 10px;

  border-bottom: 2px solid ${({ theme }) => theme.textColorAdditional};
`


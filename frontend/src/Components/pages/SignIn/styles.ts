import styled from "styled-components";

import { H2 } from "../../styled/Components";
import {
	fontH2,
	textColorMain,
	blackTextStroke,
} from "../../styled/Mixins/mixins";

export const H2SignIn = styled(H2)`
	position: relative;

	margin: 0 auto;
	max-width: 300px;
	text-align: center;

  transform: translateY(-200px);

	${fontH2}
	${textColorMain}
  ${blackTextStroke}
`;

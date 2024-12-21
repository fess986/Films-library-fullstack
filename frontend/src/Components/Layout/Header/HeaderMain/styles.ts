import styled from "styled-components";

import { Section } from "../../../styled/Components";
import { zIndexMiddle } from "../../../styled/Mixins/mixins";

export const SectionHero = styled(Section)`
	position: relative;
	min-height: 675px;
  ${zIndexMiddle}

	max-width: 1440px;
`
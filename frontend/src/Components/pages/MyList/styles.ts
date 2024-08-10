import styled from "styled-components";
import { H1Hidden, H2 } from "../../styled/Components";
import { fontH2 } from "../../styled/Mixins/mixins";

export const H2Hidden = styled(H1Hidden)`
	font-size: ${(props) => props.theme.textSizeH2 || "32px"};
	line-height: ${(props) => props.theme.textLineHeightH2 || "45px"};
`;

export const H2CatalogTitle = styled(H2)`
${fontH2}
`


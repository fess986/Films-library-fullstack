import styled from "styled-components";
import { H2 } from "./H2";
import { blackTextStroke } from "../../Mixins/mixins";

export const H2Main = styled(H2)`
${blackTextStroke}
color: ${(props) => props.theme.textColorMain};
`;

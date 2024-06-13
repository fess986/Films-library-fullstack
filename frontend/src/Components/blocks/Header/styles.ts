import styled from "styled-components";
import { Header } from "../../styled/Components";
import { zIndexMiddle } from "../../styled/Mixins/mixins";
import { PageList } from "../../../const/const";
const StyledHeader = styled(Header)`
  display: flex;
	max-width: 1300px;
	padding: 25px 75px;
	align-items: center;
	justify-content: space-between;
`
type HeaderProps = {
  $page?: PageList,
}

export const HeaderMain = styled(StyledHeader)<HeaderProps>`
	position: relative;
	margin: 0 auto;
	margin-bottom: ${(props => (props.$page === PageList.MAIN ? "58px" : "0"))};
  ${zIndexMiddle};
`
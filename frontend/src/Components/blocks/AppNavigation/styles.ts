import styled from "styled-components";

import { PageList } from "../../../const/const";
import { Nav } from "../../styled/Components/Nav/Nav";

type AppNavigationProps = {
	$page?: PageList;
};

const marginValues: Partial<Record<PageList, string>> = {
	[PageList.MAIN]: "70px",
	[PageList.MYLIST]: "0px",
};

export const NavApp = styled(Nav)<AppNavigationProps>`
	display: flex;
	align-items: center;
	margin-left: ${({ $page }) => ($page ? marginValues[$page] || "0px" : "0px")};
`;

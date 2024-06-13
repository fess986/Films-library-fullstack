import styled from "styled-components";
import { Nav } from "../../styled/Components/Nav/Nav";
import { PageList } from "../../../const/const";

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

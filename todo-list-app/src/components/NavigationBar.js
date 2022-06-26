import React from 'react';
import styled from "styled-components"

const StyledNavBar = styled.nav`
	margin: 10;
`;

const NavItem = styled.button`
	&:focus {
		outline: none;
	}
	border: white solid 1px;
	background-color: white;
	font-size: inherit;
	color: #3f3f3f;
	padding: 0.5rem 1.5rem;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	cursor: pointer;
`;

const navBarList = [
	{
		title: "Todo List",
		action: null,
	},
	{
		title: "Home",
		action: "home",
	},
	{
		title: "Work",
		action: "work",
	},
];

function NavBar({ handleNavBar }) {
	return (
		<div>
			<StyledNavBar>
				{navBarList.map(item => (
					<NavItem
						onClick={() => {
							handleNavBar(item.action);
						}}
					>
                    {item.title}
                    </NavItem>
				))}
			</StyledNavBar>
		</div>
	);
}

export default NavBar;
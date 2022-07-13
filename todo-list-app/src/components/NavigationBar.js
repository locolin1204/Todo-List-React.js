import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
	margin: 10;
`;

const StyledNavItem = styled.button`
	&:focus {
		outline: none;
	}
	/* border: white solid 1px; */
	width: 8em;
	border: none;
	background-color: white;
	font-size: inherit;
	color: #3f3f3f;
	padding: 0.5rem 1.5rem;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	cursor: pointer;

	${({ curActive }) => {
		if (curActive) {
			return `
			border-top: 2px solid #609aec;
			background: #ebf3fe;
			font-weight: bold;
			box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
			color: #609aec;
		`;
		}
	}}
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

function NavBar({ filterItem, active }) {
	return (
		<div>
			<StyledNavBar>
				{navBarList.map((item, index) => (
					<StyledNavItem
						curActive={active === item.action}
						key={index}
						onClick={() => {
							filterItem(item.action);
							console.log(item.action);
						}}
					>
						{item.title}
					</StyledNavItem>
				))}
			</StyledNavBar>
		</div>
	);
}

export default NavBar;

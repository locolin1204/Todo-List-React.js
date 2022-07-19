import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
	margin: 10;
`;

const StyledNavItem = styled.button`
	&:focus {
		outline: none;
	}
	width: 8em;
	border: none;
	background-color: white;
	font-size: inherit;
	color: #b0b0b0;
	padding: 0.5rem 1.5rem;
	box-shadow: #ebf3fe 0px -10px 10px -10px inset;
	cursor: pointer;
	position: relative;
	bottom: 2.255em;
	/* 
	&:hover {
		color: #609aec;
		transition-property: color, box-shadow;
		transition-duration: 500ms;
		box-shadow: #d0e4ff 0px -10px 10px -10px inset;
	} */

	${({ curActive }) => {
		if (curActive) {
			return `
			border-top: 2px solid #609aec;
			box-shadow: none;
			color: #609aec;
		`;
		} else {
			return `
			&:hover {
				color: #609aec;
				transition-property: color, box-shadow;
				transition-duration: 500ms;
				box-shadow: #d0e4ff 0px -10px 10px -10px inset;
			}
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

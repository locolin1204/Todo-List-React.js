import React from "react";


function Header({ title }) {
	function renderTitle(title) {
		switch (title) {
			case "home":
				return "Home";
			case "work":
				return "Work";
			default:
				return "Todo List";
		}
	}

	return (
		<div>
			<h1>{renderTitle(title)}</h1>
		</div>
	);
}

export default Header;

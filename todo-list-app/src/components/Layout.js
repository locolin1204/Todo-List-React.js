import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link to="/">Todo List</Link>
				<Link to="/home">home</Link>
				<Link to="/work">work</Link>
			</nav>
			<div>{children}</div>
		</div>
	);
}

export default Layout;

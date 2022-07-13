import React from "react";
import NavBar from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import TodoMain from "../pages";
import ErrorPage from "../pages/ErrorPage";

function Layout({ children }) {
	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<TodoMain />} />
					<Route path="/home" element={<Home />} />
					<Route path="/work" element={<Work />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>

			<div>{children}</div>
		</div>
	);
}

export default Layout;

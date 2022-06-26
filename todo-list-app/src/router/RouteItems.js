import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoListMain from "../pages/Layout";
import Home from "../pages/Home";
import Work from "../pages/Work";

function RouteItems() {
	return (
		<Routes>
			<Route path="/" element={<TodoListMain />}></Route>
			<Route path="/home" element={<Home />}></Route>
			<Route path="/work" element={<Work />}></Route>
		</Routes>
	);
}

export default RouteItems;

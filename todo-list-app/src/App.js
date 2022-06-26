import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import RouteItems from "./router/RouteItems";

function App() {
	return (
		<Router>
			<Layout>
				<RouteItems />
			</Layout>
		</Router>
	);
}

export default App;

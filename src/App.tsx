import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Preview from "./pages/Preview";
import Main from "./pages/Main";

import { useActions } from "./hooks/useAction";

function App() {
	const { fetchPromotionProducts } = useActions();
	useEffect(() => {
		fetchPromotionProducts();
	}, []);

	return (
		<div className="App">
			<Preview />
			<Main />
			<header className="App-header"></header>
		</div>
	);
}

export default App;


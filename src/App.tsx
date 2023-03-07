import React from "react";
import "./assets/scss/App.scss";
import Preview from "./pages/Preview";
import Main from "./pages/Main";

function App() {
	return (
		<div className="App">
			<Preview />
			<Main />
			<header className="App-header"></header>
		</div>
	);
}

export default App;


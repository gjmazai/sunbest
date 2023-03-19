import React, { FC } from "react";
import Headers from "./Headers";
import Content from "./Content";

import { Route, Routes } from "react-router-dom";
import { cartRoute, contentRoute } from "../router/router";

const Main: FC = () => {
	return (
		<div className="Main">
			<Headers />
			<Routes>
				<Route
					path={contentRoute.path}
					element={<Content />}
				/>
				<Route
					path={cartRoute.path}
					element={<cartRoute.element />}
				/>
			</Routes>
		</div>
	);
};

export default Main;


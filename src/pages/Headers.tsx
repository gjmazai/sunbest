import React, { FC } from "react";
import HeaderAdditional from "../components/HeaderAdditional";
import HeaderMain from "../components/HeaderMain";

const Headers: FC = () => {
	return (
		<div className="Headers">
			<HeaderAdditional />
			<HeaderMain />
		</div>
	);
};

export default Headers;


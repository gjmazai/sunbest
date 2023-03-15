import React, { FC } from "react";
import Headers from "./Headers";
import ContentPreview from "../components/ContentPreview";
import PreviewProducts from "./PreviewProducts";

const Main: FC = () => {
	return (
		<div className="Main">
			<Headers />
			<ContentPreview />
			<PreviewProducts />
		</div>
	);
};

export default Main;


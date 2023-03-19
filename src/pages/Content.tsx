import React, { FC } from "react";
import ContentPreview from "../components/ContentPreview";
import PreviewProducts from "./PreviewProducts";

const Content: FC = () => {
	return (
		<>
			<ContentPreview />
			<PreviewProducts />
		</>
	);
};

export default Content;

import React, { FC } from "react";

import ContentPreviewPromotion from "./ContentPreview/ContentPreviewPromotion";
import ContentPreviewHeader from "./ContentPreview/ContentPreviewHeader";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ContentPreview: FC = () => {
	// useTypedSelector((state) => state.promotionProducts);
	return (
		<div>
			<ContentPreviewHeader />
			<ContentPreviewPromotion />
		</div>
	);
};

export default ContentPreview;


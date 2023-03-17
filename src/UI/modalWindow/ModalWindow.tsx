import React, { FC, ReactNode } from "react";
import { IPromotionProducts } from "../../models/IPromotionProducts";
import classes from "./modalWindow.module.scss";
import { JsxElement } from "typescript";

interface modellWindowProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
	children: ReactNode;
}

const ModalWindow: FC<modellWindowProps> = ({ visible, setVisible, children }) => {
	const rootClasses = [classes.myModal];
	if (visible) {
		rootClasses.push(classes.active);
	}

	return (
		<div
			className={rootClasses.join(" ")}
			onClick={() => {
				setVisible(false);
			}}
		>
			<div
				className={classes.myModalContent}
				onClick={(event) => event.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default ModalWindow;

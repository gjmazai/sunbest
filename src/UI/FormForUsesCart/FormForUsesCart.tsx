import React, { FC } from "react";

import classes from "./FormForUsesCart.module.scss";
import MyProductList from "../MyProductList/MyProductList";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FormForUsesCart: FC = () => {
	const productsInCart = useTypedSelector((state) => state.cart.products);
	return (
		<div className={classes.Form}>
			{productsInCart.map((el) => (
				<MyProductList
					key={el.id}
					productInCart={el}
				/>
			))}
		</div>
	);
};

export default FormForUsesCart;

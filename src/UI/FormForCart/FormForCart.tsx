import React, { FC } from "react";
import { IPromotionProducts } from "../../models/IPromotionProducts";
import { costDenominator } from "../../utils/costDenominator";

import classes from "./ForamForCart.module.scss";

interface FormForCartProps {
	product: IPromotionProducts;
	setProduct: (newProduct?: IPromotionProducts) => void;
}

const FormForCart: FC<FormForCartProps> = ({ product, setProduct }) => {
	return (
		<div className={classes.form}>
			{product.promoCost ? <h2 className="PromotionProduct__cost">{costDenominator(product.promoCost)} ₽</h2> : <h2 className="PromotionProduct__cost">{costDenominator(product.cost)} ₽</h2>}
			<h5 className="PromotionProduct__fullName">{product.fullName}</h5>
			<ul className="PromotionProduct__list">
				<li>
					Размеры: <span>{product.size}</span>
				</li>
				<li>
					Бренд: <span>{product.brand}</span>
				</li>
				<li>
					Страна: <span>{product.country}</span>
				</li>
				<li>
					Код: <span>{product.id}</span>
				</li>
			</ul>
			{product.availability ? (
				<button
					className={classes.button}
					onClick={() => {
						setProduct(product);
					}}
				>
					Добавить товар в корзину
				</button>
			) : (
				<button
					className={classes.button}
					onClick={() => {
						setProduct();
					}}
				>
					Сообщить о появлении
				</button>
			)}
		</div>
	);
};

export default FormForCart;

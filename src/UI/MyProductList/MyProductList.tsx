import React, { FC } from "react";

import classes from "./MyProductList.module.scss";

import { IPromotionProducts } from "../../models/IPromotionProducts";
import { costDenominator } from "../../utils/costDenominator";

interface MyProductListProps {
	productInCart: IPromotionProducts;
}

const MyProductList: FC<MyProductListProps> = ({ productInCart }) => {
	return (
		<div className="PromotionProduct">
			{productInCart.promoCost ? <h2 className="PromotionProduct__cost">{costDenominator(productInCart.promoCost)} ₽</h2> : <h2 className="PromotionProduct__cost">{costDenominator(productInCart.cost)} ₽</h2>}
			<h5 className="PromotionProduct__fullName">{productInCart.fullName}</h5>
			<ul className="PromotionProduct__list">
				<li>
					Размеры: <span>{productInCart.size}</span>
				</li>
				<li>
					Бренд: <span>{productInCart.brand}</span>
				</li>
				<li>
					Страна: <span>{productInCart.country}</span>
				</li>
				<li>
					Код: <span>{productInCart.id}</span>
				</li>
			</ul>
		</div>
	);
};

export default MyProductList;

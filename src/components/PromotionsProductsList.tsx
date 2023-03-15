import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PromotionProduct from "./PromotionProduct";

const PromotionsProductsList: FC = () => {
	const promotionProductsState = useTypedSelector((state) => state.promotionProducts);
	return (
		<div className="PromotionsProducts">
			<h1 className="PromotionsProducts_title">Популярные модели</h1>
			<div className="PromotionsProducts__list">
				{promotionProductsState.promotionProducts.map((el, index) => {
					return (
						<PromotionProduct
							key={index}
							promotionProduct={el}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PromotionsProductsList;

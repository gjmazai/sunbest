import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PromotionProduct from "./PromotionProduct";
import { IPromotionProducts } from "../models/IPromotionProducts";
import ModalWindow from "../UI/modalWindow/modalWindow";

const PromotionsProductsList: FC = () => {
	const promotionProductsState = useTypedSelector((state) => state.promotionProducts);
	const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);

	const setProduct = (newProduct: IPromotionProducts) => {
		// Здесь функция установки продукта
		setIsVisibleModalWindow(false);
	};

	return (
		<div className="PromotionsProducts">
			<ModalWindow
				product={promotionProduct}
				visible={isVisibleModalWindow}
				setVisible={setIsVisibleModalWindow}
			>
				<Form />
			</ModalWindow>
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

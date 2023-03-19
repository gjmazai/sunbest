import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PromotionProduct from "./PromotionProduct";
import { IPromotionProducts } from "../models/IPromotionProducts";
import ModalWindow from "../UI/modalWindow/ModalWindow";
import FormForCart from "../UI/FormForCart/FormForCart";
import { FilterFroIdProduct } from "../utils/filterForIdProduct";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { useActions } from "../hooks/useAction";

const PromotionsProductsList: FC = () => {
	const promotionProductsState = useTypedSelector((state) => state.promotionProducts);
	const cartState = useTypedSelector((state) => state.cart);
	const { setNewProduct } = useActions();

	const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
	const [idProduct, setIdProduct] = useState(0);

	const setProduct = (newProduct?: IPromotionProducts) => {
		if (newProduct) setNewProduct(newProduct);
		setIsVisibleModalWindow(false);
	};

	return (
		<div className="PromotionsProducts">
			<h1 className="PromotionsProducts_title">Популярные модели</h1>
			{isVisibleModalWindow && (
				<ModalWindow
					visible={isVisibleModalWindow}
					setVisible={setIsVisibleModalWindow}
				>
					<FormForCart
						product={FilterFroIdProduct(promotionProductsState.promotionProducts, idProduct)}
						setProduct={setProduct}
					/>
				</ModalWindow>
			)}
			<div className="PromotionsProducts__list">
				{promotionProductsState.promotionProducts.map((el, index) => {
					return (
						<PromotionProduct
							key={el.id}
							promotionProduct={el}
							setIdProduct={setIdProduct}
							setIsVisibleModalWindow={setIsVisibleModalWindow}
							isVisible={isVisibleModalWindow}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PromotionsProductsList;

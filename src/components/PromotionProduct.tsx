import React, { Dispatch, FC, SetStateAction } from "react";
import { IPromotionProducts } from "../models/IPromotionProducts";

import availabilityIcon from "../assets/img/availability-icon.svg";
import notAvailbalityIcon from "../assets/img/availability-iconNOT.svg";
import promoIcon from "../assets/img/promotion-icon.svg";

import { costDenominator } from "../utils/costDenominator";

interface ProductCardProps {
	promotionProduct: IPromotionProducts;
	setIdProduct: Dispatch<SetStateAction<number>>;
	setIsVisibleModalWindow: (isVisible: boolean) => void;
	isVisible: boolean;
}

const PromotionProduct: FC<ProductCardProps> = ({ promotionProduct, setIdProduct, setIsVisibleModalWindow, isVisible }) => {
	const imgReg = require(`../assets/img/${promotionProduct.img}`) as string;

	return (
		<div className="PromotionProduct">
			<div
				className="PromotionProduct__img"
				onClick={() => {
					if (!isVisible) {
						setIdProduct(promotionProduct.id);
						setIsVisibleModalWindow(true);
					}
				}}
			>
				<img
					src={imgReg}
					alt="Промо-акция продукта"
					className="PromotionProduct__img-svg"
					style={{ maxWidth: "230px" }}
				/>
				<div className="availabilityIcon">
					{promotionProduct.availability ? <img src={availabilityIcon} /> : <img src={notAvailbalityIcon} />}
					{promotionProduct.promotion && <img src={promoIcon} />}
				</div>
			</div>
			<div className="PromotionProduct__description">
				{promotionProduct.promoCost ? (
					<div className="PromotionProduct__cost">
						<h2>{costDenominator(promotionProduct.promoCost)} ₽</h2>
						<p className="PromotionProduct__cost__text-decoration">{costDenominator(promotionProduct.cost)} ₽</p>
					</div>
				) : (
					<h2 className="PromotionProduct__cost">{costDenominator(promotionProduct.cost)} ₽</h2>
				)}
				<h5 className="PromotionProduct__fullName">{promotionProduct.fullName}</h5>
				<ul className="PromotionProduct__list">
					<li>
						Размеры: <span>{promotionProduct.size}</span>
					</li>
					<li>
						Бренд: <span>{promotionProduct.brand}</span>
					</li>
					<li>
						Страна: <span>{promotionProduct.country}</span>
					</li>
					<li>
						Код: <span>{promotionProduct.id}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PromotionProduct;

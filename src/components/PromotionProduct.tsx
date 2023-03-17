import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { IPromotionProducts } from "../models/IPromotionProducts";
import availabilityIcon from "../assets/img/availability-icon.svg";
import { costDenominator } from "../utils/costDenominator";

interface ProductCardProps {
	promotionProduct: IPromotionProducts;
	setIdProduct: Dispatch<SetStateAction<number>>;
	setIsVisibleModalWindow: (isVisible: boolean) => void;
	isVisible: boolean;
}

const PromotionProduct: FC<ProductCardProps> = ({ promotionProduct, setIdProduct, setIsVisibleModalWindow, isVisible }) => {
	const imgReg = require(`../assets/img/${promotionProduct.img}`) as string;
	const imgRef = useRef();

	return (
		<div
			className="PromotionProduct"
			onClick={() => {
				if (!isVisible) {
					setIdProduct(promotionProduct.id);
					setIsVisibleModalWindow(true);
				}
			}}
		>
			<div className="PromotionProduct__img">
				<img
					src={imgReg}
					alt="Промо-акция продукта"
					className="PromotionProduct__img-svg"
					style={{ maxWidth: "230px" }}
				/>
				{promotionProduct.availability && (
					<img
						src={availabilityIcon}
						className="availabilityIcon"
					/>
				)}
			</div>
			<div className="PromotionProduct__description">
				<h2 className="PromotionProduct__cost">{costDenominator(promotionProduct.cost)} ₽</h2>
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

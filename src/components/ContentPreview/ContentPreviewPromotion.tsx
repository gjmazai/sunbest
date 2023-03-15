import React, { FC } from "react";
import sliderItem from "../../assets/img/slider-item.jpg";
import cardItem from "../../assets/img/card_preview.jpg";

const ContentPreviewPromotion: FC = () => {
	let [slide1, slide2] = [true, false];

	return (
		<div className="ContentPreviewPromotion">
			<div className="ContentPreviewPromotion__frontLine">
				<div className="ContentPreviewPromotion__slider">
					{slide1 && (
						<div className="ContentPreviewPromotion__slider-item">
							<img
								src={sliderItem}
								alt="slider-item"
							></img>
						</div>
					)}
					{slide2 && (
						<div className="ContentPreviewPromotion__slider-item">
							<img
								src={sliderItem}
								alt="slider-item"
							></img>
						</div>
					)}
				</div>
			</div>
			<div className="ContentPreviewPromotion__backLine">
				<div className="ContentPreviewPromotion__backLine__card">
					<img
						src={cardItem}
						alt="cardItem"
					/>
					<h5 className="ContentPreviewPromotion__backLine__text_card">Скидка до 20% на сантехнику Wa**erkraft</h5>
				</div>
				<div className="ContentPreviewPromotion__backLine__card">
					<img
						src={cardItem}
						alt="cardItem"
					/>
					<h5 className="ContentPreviewPromotion__backLine__text_card">Скидка до 20% на сантехнику Wa**erkraft</h5>
				</div>
				<div className="ContentPreviewPromotion__backLine__card">
					<img
						src={cardItem}
						alt="cardItem"
					/>
					<h5 className="ContentPreviewPromotion__backLine__text_card">Скидка до 20% на сантехнику Wa**erkraft</h5>
				</div>
				<div className="ContentPreviewPromotion__backLine__card">
					<img
						src={cardItem}
						alt="cardItem"
					/>
					<h5 className="ContentPreviewPromotion__backLine__text_card">Скидка до 20% на сантехнику Wa**erkraft</h5>
				</div>
				<div className="ContentPreviewPromotion__backLine__card__nophoto">
					<h5 className="ContentPreviewPromotion__backLine__text_card__nophoto">Смотреть все акции</h5>
				</div>
			</div>
		</div>
	);
};

export default ContentPreviewPromotion;


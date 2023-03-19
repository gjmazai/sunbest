import { IPromotionProducts } from "../models/IPromotionProducts";

export function countLikesProducts (products:IPromotionProducts[]){
	return products.reduce((accum, el) => {
		return el.like ? accum+=1 : accum += 0;
}, 0);
}
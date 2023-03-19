import { IPromotionProducts } from './../models/IPromotionProducts';
export function summCost (products:IPromotionProducts[]){
	return products.reduce((accum, el) => {
		if(el.promotion && el.promoCost){
		return accum+=el.promoCost;
	} else {
		return accum+=el.cost;
	}
}
	, 0);
}
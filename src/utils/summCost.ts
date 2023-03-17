import { IPromotionProducts } from './../models/IPromotionProducts';
export function summCost (products:IPromotionProducts[]){
	return products.reduce((accum, el) => accum+=el.cost, 0);
}
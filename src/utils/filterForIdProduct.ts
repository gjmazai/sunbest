import { IPromotionProducts } from "../models/IPromotionProducts";

export function FilterFroIdProduct (products: IPromotionProducts[], num:number):IPromotionProducts{
	return products.filter((el) => {return el.id === num})[0];
}
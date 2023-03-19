export interface IPromotionProducts{
	fullName: string;
	category: string,
	cost: number;
	size: string;
	brand: string;
	country: string;
	id: number;
	promotion: boolean;
	availability: boolean;
	promoCost: number | null,
	img: string;
	like: boolean;
}
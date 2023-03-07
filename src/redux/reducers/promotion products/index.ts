import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPromotionProducts } from "./types";


const initialState: IPromotionProducts = {
	fullName: "",
	cost: NaN,
	size: "",
	brand: "",
	country: "",
	id: NaN,
	promotion: null,
	availability: null,
	img: ""
}

export const promotionProductsSlice = createSlice({
	name: 'promotion',
	initialState,
	reducers: {
		
	}
})

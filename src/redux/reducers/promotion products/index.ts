import { IPromotionProducts } from './../../../models/IPromotionProducts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPromotionProductsStore } from "./types";


const initialState: IPromotionProductsStore = {
	promotionProducts: []
}

export const promotionProductsSlice = createSlice({
	name: 'promotion',
	initialState,
	reducers: {
		setPromotionProducts(state, action:PayloadAction<IPromotionProducts[]>){
			state.promotionProducts = action.payload;
		}
	}
})


export default promotionProductsSlice.reducer;

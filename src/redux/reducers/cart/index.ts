import { IPromotionProducts } from './../../../models/IPromotionProducts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from './types';

let initialState:ICart = {
	products: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers:{
	setPromotionProduct: (state, action:PayloadAction<IPromotionProducts>) => {
		state.products = [...state.products , action.payload];
	},
	setAllProductsInCart: (state, action:PayloadAction<IPromotionProducts[]>) => {
		state.products = action.payload;
	}
}
})


export default cartSlice.reducer;
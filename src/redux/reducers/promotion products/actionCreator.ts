import { promotionProductsSlice } from ".";
import { AppDispatch } from "../../store";
import FetchService from "../../../api/fetchService";

export const promotionProductsActionCreator = {
	fetchPromotionProducts: () => async (dispatch:AppDispatch) => {
		try {
			const promotionProducts = (await FetchService.fetchPromotionProducts()).data;
			dispatch(promotionProductsSlice.actions.setPromotionProducts(promotionProducts));
		} catch (error) {
			console.error(error);
		}
	}
}
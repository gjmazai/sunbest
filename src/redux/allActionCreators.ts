import  { cartSlice } from "./reducers/cart";
import { cartActionCreator } from "./reducers/cart/actionCreator";
import { promotionProductsSlice } from "./reducers/promotion products";
import { promotionProductsActionCreator } from "./reducers/promotion products/actionCreator";

export const allActionCreators = {
	...promotionProductsSlice.actions,
	...promotionProductsActionCreator,
	...cartSlice.actions,
	...cartActionCreator
}
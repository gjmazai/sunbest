import { combineReducers } from "redux";

import promotionProducts from "./reducers/promotion products";
import cart from "./reducers/cart/index";

export const rootReducer = combineReducers({
	promotionProducts,
	cart
})
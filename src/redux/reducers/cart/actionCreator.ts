import { IPromotionProducts } from './../../../models/IPromotionProducts';
import { cartSlice } from ".";
import { AppDispatch } from "../../store";


export const cartActionCreator = {
	setNewProduct: (newProduct:IPromotionProducts) => async(dispatch: AppDispatch) =>{
		try{
			const productsCart = localStorage.getItem('productsCart') || '[]'; // || нужно для проврки есть ли что-то в локалсторадже , чтобы там не было null
			const jsonProductsCart = JSON.parse(productsCart) as IPromotionProducts[]; 
			jsonProductsCart.push(newProduct);
			console.log(jsonProductsCart);
			localStorage.setItem('productsCart', JSON.stringify(jsonProductsCart));
			dispatch(cartSlice.actions.setPromotionProduct(newProduct));
		} catch(error){
			console.error(error);
		}
	},

	fetchProductsCart: () => async(dispatch: AppDispatch) => {
		try {
			const productsCart = localStorage.getItem('productsCart') || '[]';
			const jsonProductsCart = JSON.parse(productsCart) as IPromotionProducts[];
			localStorage.setItem('productsCart', JSON.stringify(jsonProductsCart));
			dispatch(cartSlice.actions.setAllProductsInCart(jsonProductsCart));
		} catch (error) {
			console.error(error);
		}
	}
}
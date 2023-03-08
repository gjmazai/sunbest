import { IPromotionProducts } from "../models/IPromotionProducts";
import axios, {AxiosResponse} from "axios";

export default class FetchService{
	static async fetchPromotionProducts():Promise<AxiosResponse<IPromotionProducts[]>>{
		return axios.get<IPromotionProducts[]>("./store.json");
	}
}
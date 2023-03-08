import { allActionCreators } from '../redux/allActionCreators';
import { useTypedDispatch } from "./useTypedDispatch";
import { bindActionCreators } from "redux";

export const useActions = () => {
	const dispatch = useTypedDispatch();
	return bindActionCreators(allActionCreators, dispatch);
}
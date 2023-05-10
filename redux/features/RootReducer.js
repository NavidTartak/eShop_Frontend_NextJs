import { combineReducers } from "redux";
import ShoppingCartReducer from "./shoppingcart/ShoppingCartSlice";
const RootReducer = combineReducers({
  shoppingcart: ShoppingCartReducer,
});
export default RootReducer;

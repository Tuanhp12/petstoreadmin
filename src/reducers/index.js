import { combineReducers } from "redux";
// import errorReducer from './errorReducer'
// import productReducer from "./productReducer";
import categoryReducer from './categoryReducer'
// import basketReducer from './basketReducer'
import customerReducer from "./customerReducer";
import orderDetailReducer from "./orderDetailReducer";

export default combineReducers({
//   errors: errorReducer,
//   product: productReducer,
  category: categoryReducer,
//   basketState : basketReducer,
  customerState: customerReducer,
  orderDetailState: orderDetailReducer
}); 
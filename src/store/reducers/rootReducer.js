import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import productItemReducer from "./productitemReducer";
import stockReducer from "./stockReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  agentReducer,
  productItemReducer,
  stockReducer,
  orderReducer,
});

export default rootReducer;

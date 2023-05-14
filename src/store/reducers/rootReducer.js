import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import productItemReducer from "./productitemReducer";
import stockReducer from "./stockReducer";
import orderReducer from "./orderReducer";
import catergoryReducer from "./catergoryReducer";

const rootReducer = combineReducers({
  agentReducer,
  productItemReducer,
  stockReducer,
  orderReducer,
  catergoryReducer,
});

export default rootReducer;

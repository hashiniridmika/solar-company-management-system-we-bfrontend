import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import productItemReducer from "./productitemReducer";
import stockReducer from "./stockReducer";
import orderReducer from "./orderReducer";
import catergoryReducer from "./catergoryReducer";
import employeeReducer from "./employeesReducer";
import orderitemWithQuantityReducer from "./orderitemWithQuantityReducer";
import feedbackReducer from "./feedbackReducer";

const rootReducer = combineReducers({
  agentReducer,
  productItemReducer,
  stockReducer,
  orderReducer,
  catergoryReducer,
  employeeReducer,
  orderitemWithQuantityReducer,
  feedbackReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import productItemReducer from "./productitemReducer";
import stockReducer from "./stockReducer";
import orderReducer from "./orderReducer";
import catergoryReducer from "./catergoryReducer";
import employeeReducer from "./employeesReducer";

const rootReducer = combineReducers({
  agentReducer,
  productItemReducer,
  stockReducer,
  orderReducer,
  catergoryReducer,
  employeeReducer,
});

export default rootReducer;

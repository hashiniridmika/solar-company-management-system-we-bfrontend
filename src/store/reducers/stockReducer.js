import * as Actions from "../actions/stockAction";

const inisialState = {
  getAllStockListLoading: "notStarted",
  allStockList: [],
  userSelectedStock: {},
  stockUpdateStatus: "notstarted",
};

const stockReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_STOCKS_LOADING:
      return { ...state, getAllStockListLoading: "loading" };

    case Actions.GET_ALL_STOCKS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllStockListLoading: "sucess",
        allStockList: action.payload,
      };

    case Actions.GET_ALL_STOCKS_FAIL:
      return {
        ...state,
        getAllStockListLoading: "fail",
        allStockList: [],
      };

    case Actions.SET_USER_SELECTED_STOCK:
      return { ...state, userSelectedStock: action.payload };

    case Actions.UPDATE_STOCKS_SUCESS:
      return { ...state, stockUpdateStatus: "completed" };

    case Actions.CLEAR_STOCKS_UPDATE_STATUS:
      return { ...state, stockUpdateStatus: "notStarted" };
    default:
      return state;
  }
};

export default stockReducer;

import * as Actions from "../actions/stockAction";

const inisialState = {
  getAllStockListLoading: "notStarted",
  allStockList: [],
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

    default:
      return state;
  }
};

export default stockReducer;

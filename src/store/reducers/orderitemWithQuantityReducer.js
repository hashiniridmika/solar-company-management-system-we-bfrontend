import * as Actions from "../actions/orderitemWithQuantityAction";

const inisialState = {
  getAllOrderitemWithQuantityListLoading: "notStarted",
  allOrderitemWithQuantityList: [],
};

const orderitemWithQuantityReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_ORDERITEMWITHQUANTITY_LOADING:
      return { ...state, getAllOrderitemWithQuantityListLoading: "loading" };

    case Actions.GET_ALL_ORDERITEMWITHQUANTITY_SUCESS:
      return {
        ...state,
        getAllOrderitemWithQuantityListLoading: "sucess",
        allOrderitemWithQuantityList: action.payload,
      };

    case Actions.GET_ALL_ORDERITEMWITHQUANTITY_FAIL:
      return {
        ...state,
        getAllOrderitemWithQuantityListLoading: "fail",
        allOrderitemWithQuantityList: [],
      };

    default:
      return state;
  }
};

export default orderitemWithQuantityReducer;

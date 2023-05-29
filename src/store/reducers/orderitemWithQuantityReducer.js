import * as Actions from "../actions/orderitemWithQuantityAction";

const inisialState = {
  getAllOrderitemWithQuantityListLoading: "notStarted",
  allOrderitemWithQuantityList: [],
  userSelectedOrderitemWithQuantity: {},
};

const orderitemWithQuantityReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_ORDERITEMWITHQUANTITY_LOADING:
      return { ...state, getAllOrderitemWithQuantityListLoading: "loading" };

    case Actions.GET_ALL_ORDERITEMWITHQUANTITY_SUCESS:
      console.log(action.payload);
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

    case Actions.SET_USER_SELECTED_ORDERITEMWITHQUANTITY:
      return { ...state, userSelectedOrderitemWithQuantity: action.payload };

    default:
      return state;
  }
};

export default orderitemWithQuantityReducer;

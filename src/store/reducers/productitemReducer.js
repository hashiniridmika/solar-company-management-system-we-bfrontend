import * as Actions from "../actions/productitemAction";

const inisialState = {
  getAllProductitemListLoading: "notStarted",
  allProductitemList: [],
  userSelectedProductitem: {},
  productitemUpdateStatus: "notstarted",
};

const productItemReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PRODUCTITEMS_LOADING:
      return { ...state, getAllProductitemListLoading: "loading" };

    case Actions.GET_ALL_PRODUCTITEMS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllProductitemListLoading: "sucess",
        allProductitemList: action.payload,
      };

    case Actions.GET_ALL_PRODUCTITEMS_FAIL:
      return {
        ...state,
        getAllProductitemListLoading: "fail",
        allProductitemList: [],
      };

    case Actions.SET_USER_SELECTED_PRODUCTITEM:
      return { ...state, userSelectedProductitem: action.payload };

    default:
      return state;
  }
};

export default productItemReducer;

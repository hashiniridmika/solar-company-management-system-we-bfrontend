import * as Actions from "../actions/productitemAction";

const inisialState = {
  getAllProductitemListLoading: "notStarted",
  allProductitemList: [],
  userSelectedProductitem: {},
  productitemUpdateStatus: "notstarted",
  productitemCreateStatus: "notstarted",
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

    case Actions.UPDATE_PRODUCTITEMS_SUCESS:
      return { ...state, productitemUpdateStatus: "completed" };

    case Actions.CLEAR_PRODUCTITEMS_UPDATE_STATUS:
      return { ...state, productitemUpdateStatus: "notStarted" };

    case Actions.CREATE_PRODUCTITEM_START:
      return { ...state, productitemCreateStatus: "loading" };

    case Actions.CREATE_PRODUCTITEM_SUCCESS:
      return {
        ...state,
        productitemCreateStatus: "success",
      };

    case Actions.CREATE_PRODUCTITEM_FAIL:
      return { ...state, productitemCreateStatus: "fail" };

    default:
      return state;
  }
};

export default productItemReducer;

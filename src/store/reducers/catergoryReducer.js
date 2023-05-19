import * as Actions from "../actions/catergoryAction";

const inisialState = {
  getCategoryListLoading: "notStarted",
  allCategoryList: [],
  userSelectedCategory: {},
  catgoryUpdateStatus: "notstarted",
};

const catergoryReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_CATERGORIES_LOADING:
      return { ...state, getCategoryListLoading: "loading" };

    case Actions.GET_ALL_CATERGORIES_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getCategoryListLoading: "sucess",
        allCategoryList: action.payload,
      };

    case Actions.GET_ALL_CATERGORIES_FAIL:
      return {
        ...state,
        getCategoryListLoading: "fail",
        allCategoryList: [],
      };

    case Actions.SET_USER_SELECTED_CATEGORY:
      return { ...state, userSelectedCategory: action.payload };

    case Actions.UPDATE_CATERGORIES_SUCESS:
      return { ...state, catgoryUpdateStatus: "completed" };

    case Actions.CLEAR_CATERGORIES_UPDATE_STATUS:
      return { ...state, catgoryUpdateStatus: "notStarted" };

    default:
      return state;
  }
};

export default catergoryReducer;

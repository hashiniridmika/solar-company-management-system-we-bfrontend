import * as Actions from "../actions/catergoryAction";

const inisialState = {
  getCategoryListLoading: "notStarted",
  allCategoryList: [],
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

    default:
      return state;
  }
};

export default catergoryReducer;

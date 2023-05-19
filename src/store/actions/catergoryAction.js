import axios from "axios";

export const GET_ALL_CATERGORIES_LOADING = "GET_ALL_CATERGORIES_LOADING";
export const GET_ALL_CATERGORIES_SUCESS = "GET_ALL_CATERGORIES_SUCESS";
export const GET_ALL_CATERGORIES_FAIL = "GET_ALL_CATERGORIES_FAIL";

export const SET_USER_SELECTED_CATEGORY = "SET_USER_SELECTED_CATEGORY";

//update
export const UPDATE_CATERGORIES_START = "UPDATE_CATERGORIES_START";
export const UPDATE_CATERGORIES_SUCESS = "UPDATE_CATERGORIES_SUCESS";
export const UPDATE_CATERGORIES_FAIL = "UPDATE_CATERGORIES_FAIL";

export const CLEAR_CATERGORIES_UPDATE_STATUS =
  "CLEAR_CATERGORIES_UPDATE_STATUS";

export const getAllCatergories = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CATERGORIES_LOADING });

    axios
      .get("https://plymouthfinal.live:5002/productCategory/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_CATERGORIES_SUCESS,
          payload: response.data.productCategory,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_CATERGORIES_FAIL });
      });
  };
};

//update
export const updateCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_CATERGORIES_START });
    axios
      .post("https://plymouthfinal.live:5002/category/update", { category })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_CATERGORIES_SUCESS,
          payload: response.data.category,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_CATERGORIES_FAIL });
      });
  };
};

export const clearCategoryUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_CATERGORIES_UPDATE_STATUS });
  };
};

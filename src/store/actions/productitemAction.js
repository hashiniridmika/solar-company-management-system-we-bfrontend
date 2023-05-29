import axios from "axios";
//view
export const GET_ALL_PRODUCTITEMS_LOADING = "GET_ALL_PRODUCTITEMS_LOADING";
export const GET_ALL_PRODUCTITEMS_SUCESS = "GET_ALL_PRODUCTITEMS_SUCESS";
export const GET_ALL_PRODUCTITEMS_FAIL = "GET_ALL_PRODUCTITEMS_FAIL";

export const SET_USER_SELECTED_PRODUCTITEM = "SET_USER_SELECTED_PRODUCTITEM";

//Update
export const UPDATE_PRODUCTITEMS_START = "UPDATE_PRODUCTITEMS_START";
export const UPDATE_PRODUCTITEMS_SUCESS = "UPDATE_PRODUCTITEMS_SUCESS";
export const UPDATE_PRODUCTITEMS_FAIL = "UPDATE_PRODUCTITEMS_FAIL";

export const CLEAR_PRODUCTITEMS_UPDATE_STATUS =
  "CLEAR_PRODUCTITEMS_UPDATE_STATUS";

//Create
export const CREATE_PRODUCTITEM_START = "CREATE_PRODUCTITEM_START";
export const CREATE_PRODUCTITEM_SUCCESS = "CREATE_PRODUCTITEM_SUCCESS";
export const CREATE_PRODUCTITEM_FAIL = "CREATE_PRODUCTITEM_FAIL";

export const getAllProductitems = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTITEMS_LOADING });
    axios
      .get("https://plymouthfinal.live:5002/productitem/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_PRODUCTITEMS_SUCESS,
          payload: response.data.productitem,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_PRODUCTITEMS_FAIL });
      });
  };
};

export const setUserSelectedProductitem = (productitem) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_PRODUCTITEM, payload: productitem });
  };
};

//update
export const updateProductitem = (productitem) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PRODUCTITEMS_START });
    axios
      .post("http://localhost:5002/productitem/update", { productitem })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_PRODUCTITEMS_SUCESS,
          payload: response.data.productitem,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_PRODUCTITEMS_FAIL });
      });
  };
};

export const clearProductitemUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PRODUCTITEMS_UPDATE_STATUS });
  };
};

//Create
export const createProductitem = (productitem) => {
  console.log(productitem);
  return (dispatch) => {
    dispatch({ type: CREATE_PRODUCTITEM_START });
    axios
      .post("http://localhost:5002/productitem/create", { productitem })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: CREATE_PRODUCTITEM_SUCCESS,
          payload: response.data.productitem,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: CREATE_PRODUCTITEM_FAIL });
      });
  };
};

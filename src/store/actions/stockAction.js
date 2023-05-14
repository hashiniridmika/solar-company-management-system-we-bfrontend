import axios from "axios";
//View
export const GET_ALL_STOCKS_LOADING = "GET_ALL_STOCKS_LOADING";
export const GET_ALL_STOCKS_SUCESS = "GET_ALL_STOCKS_SUCESS";
export const GET_ALL_STOCKS_FAIL = "GET_ALL_STOCKS_FAIL";

export const SET_USER_SELECTED_STOCK = "SET_USER_SELECTED_STOCK";

//update
export const UPDATE_STOCKS_START = "UPDATE_STOCKS_START";
export const UPDATE_STOCKS_SUCESS = "UPDATE_STOCKS_SUCESS";
export const UPDATE_STOCKS_FAIL = "UPDATE_STOCKS_FAIL";

export const CLEAR_STOCKS_UPDATE_STATUS = "CLEAR_STOCKS_UPDATE_STATUS";

export const getAllStocks = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_STOCKS_LOADING });
    axios
      .get("http://localhost:5002/stock/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_STOCKS_SUCESS,
          payload: response.data.stock,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_STOCKS_FAIL });
      });
  };
};

export const setUserSelectedStock = (stock) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_STOCK, payload: stock });
  };
};
//update
export const updateStock = (stock) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_STOCKS_START });
    axios
      .post("http://localhost:5002/stock/update", { stock })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: UPDATE_STOCKS_SUCESS, payload: response.data.stock });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_STOCKS_FAIL });
      });
  };
};

export const clearStockUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_STOCKS_UPDATE_STATUS });
  };
};

import axios from "axios";
//View
export const GET_ALL_STOCKS_LOADING = "GET_ALL_STOCKS_LOADING";
export const GET_ALL_STOCKS_SUCESS = "GET_ALL_STOCKS_SUCESS";
export const GET_ALL_STOCKS_FAIL = "GET_ALL_STOCKS_FAIL";

export const SET_USER_SELECTED_STOCK = "SET_USER_SELECTED_STOCK";

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

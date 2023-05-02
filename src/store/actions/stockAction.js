import axios from "axios";

export const GET_ALL_STOCKS_LOADING = "GET_ALL_STOCKS_LOADING";
export const GET_ALL_STOCKS_SUCESS = "GET_ALL_STOCKS_SUCESS";
export const GET_ALL_STOCKS_FAIL = "GET_ALL_STOCKS_FAIL";

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

import axios from "axios";

export const GET_ALL_ORDERS_LOADING = "GET_ALL_ORDERS_LOADING";
export const GET_ALL_ORDERS_SUCESS = "GET_ALL_ORDERS_SUCESS";
export const GET_ALL_ORDERS_FAIL = "GET_ALL_ORDERS_FAIL";

export const SET_USER_SELECTED_ORDER = "SET_USER_SELECTED_ORDER";

export const getAllOrders = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERS_LOADING });
    axios
      .get("https://plymouthfinal.live:5002/order/view")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: GET_ALL_ORDERS_SUCESS, payload: response.data.order });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_ORDERS_FAIL });
      });
  };
};

export const setUserSelectedOrderitemWithQuantity = (order) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_SELECTED_ORDER,
      payload: order,
    });
  };
};

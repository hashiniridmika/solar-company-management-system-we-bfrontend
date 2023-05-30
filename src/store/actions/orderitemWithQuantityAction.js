import axios from "axios";

//view
export const GET_ALL_ORDERITEMWITHQUANTITY_LOADING =
  "GET_ALL_ORDERITEMWITHQUANTITY_LOADING";
export const GET_ALL_ORDERITEMWITHQUANTITY_SUCESS =
  "GET_ALL_ORDERITEMWITHQUANTITY_SUCESS";
export const GET_ALL_ORDERITEMWITHQUANTITY_FAIL =
  "GET_ALL_ORDERITEMWITHQUANTITY_FAIL";

export const SET_USER_SELECTED_ORDERITEMWITHQUANTITY =
  "SET_USER_SELECTED_ORDERITEMWITHQUANTITY";

export const getAllOrderitemWithQuantity = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERITEMWITHQUANTITY_LOADING });
    axios
      .get("http://localhost:5002/orderitemWithQuantity/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_ORDERITEMWITHQUANTITY_SUCESS,
          payload: response.data.OrderitemWithQuantity,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_ORDERITEMWITHQUANTITY_FAIL });
      });
  };
};
export const setUserSelectedOrderitemWithQuantity = (orderitemWithQuantity) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_SELECTED_ORDERITEMWITHQUANTITY,
      payload: orderitemWithQuantity,
    });
  };
};